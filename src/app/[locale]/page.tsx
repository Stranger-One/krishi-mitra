import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Page () {
  const t = await getTranslations("HomePage")


  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">About</Link>
    </div>
  );
};
