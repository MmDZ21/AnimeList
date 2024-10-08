"use client";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import React from "react";

export default function LoginBtn() {
  const { t } = useTranslation("navbar"); // Assume 'navbar' is the namespace
  return (
    <Button
      variant="outline"
      className="h-10 px-6 text-base font-semibold flex items-center justify-center"
      asChild
    >
      <Link href="/dashboard">{t("login")}</Link>
    </Button>
  );
}
