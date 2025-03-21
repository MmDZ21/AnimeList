import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logout from "@/actions/Logout";

export default async function LoginBtn() {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-6 text-base font-semibold"
            >
              {session.user.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="justify-center items-center cursor-pointer h-8"
              asChild
            >
              <Link
                href="/dashboard"
                className="w-full text-sm flex justify-center items-center font-medium"
              >
                پنل کاربری
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <form action={logout} className="border-none ring-0">
              <DropdownMenuItem
                className="justify-center items-center cursor-pointer h-8"
                asChild
              >
                <Button
                  type="submit"
                  variant="ghost"
                  className="text-sm w-full font-medium"
                >
                  خروج
                </Button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          variant="outline"
          className="h-10 px-6 text-base font-semibold flex items-center justify-center"
          asChild
        >
          <Link href="/login">ورود</Link>
        </Button>
      )}
    </>
  );
}
