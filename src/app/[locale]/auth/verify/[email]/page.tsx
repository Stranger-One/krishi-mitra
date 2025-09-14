import Verify from "@/components/auth/Verify";
import { getLocale } from "next-intl/server";

export default async function Page({ params }: { params: { email: string } }) {
  const { email } = await params;
  const userEmail = decodeURIComponent(email);
  const locale = await getLocale()
  console.log(email);
  return <Verify email={userEmail} locale={locale} />;
}
