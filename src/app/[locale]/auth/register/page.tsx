import Register from "@/components/auth/Register";
import { getLocale } from "next-intl/server";

export default async function Page () {
  const locale = await getLocale();
  return (
    <Register locale={locale} />
  );
};
