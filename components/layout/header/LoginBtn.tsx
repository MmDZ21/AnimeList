"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logout from "@/actions/Logout";
import { signOut } from "next-auth/react";

interface Session {
  user?: {
    name?: string;
  };
}

export default function LoginBtn() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const data: Session = await res.json();
          setSession(data);
        } else {
          setSession(null);
        }
      } catch {
        setSession(null);
      } finally {
        setLoading(false);
      }
    }
    loadSession();
  }, []);

  if (loading) return null;

  return session?.user?.name ? (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-10 px-6 text-base font-semibold">
          {session.user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="justify-center items-center h-8">
          <Link
            href="/dashboard"
            className="w-full text-sm flex justify-center items-center font-medium"
          >
            پنل کاربری
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

          <DropdownMenuItem
            className="justify-center items-center cursor-pointer h-8"
            asChild
          >
            <Button
              type="submit"
              variant="ghost"
              className="text-sm w-full font-medium"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              خروج
            </Button>
          </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button variant="outline" className="h-10 px-6 text-base font-semibold">
      <Link href="/login">ورود</Link>
    </Button>
  );
}
