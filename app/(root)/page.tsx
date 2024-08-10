import { createTranslation } from "@/i18n/server";

export default async function HomePage() {
  const { t } = await createTranslation("home");

  return (
    <div>
      <h1>{t("greeting")}</h1>
    </div>
  );
}
