"use client";
import React from "react";
import { switchLocaleAction } from "@/actions/switch-locale";
import { useTranslation } from "@/i18n/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ChangeLocale() {
  const { i18n, t } = useTranslation("common");
  return (
    <div>
      <Select
        onValueChange={(e) => switchLocaleAction(e)}
        value={i18n.resolvedLanguage}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="fa"> {t("persian")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
