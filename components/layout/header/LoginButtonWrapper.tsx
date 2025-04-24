import React from "react";
import LoginBtn from "./LoginBtn";
import { delay } from "@/lib/utils";

export default async function LoginButtonWrapper() {
    await delay(4000)
  return (
    <LoginBtn />
  );
}
