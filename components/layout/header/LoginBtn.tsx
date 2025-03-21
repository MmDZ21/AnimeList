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

export default async function LoginBtn() {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={buttonVariants({
              variant: "outline",
              className :"h-10 px-6 text-base font-semibold flex items-center justify-center truncate",
            })}
          >
            {session.user.name}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="justify-center">پنل کاربری</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="justify-center">خروج</DropdownMenuItem>
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
