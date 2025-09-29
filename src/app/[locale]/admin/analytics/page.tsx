import AdminAnalyticsPage from "@/components/admin/Analytics";
import Topbar from "@/components/admin/Topbar";

export default function Page () {
  return (
    <div>
        <Topbar location="analytics" />
      <AdminAnalyticsPage />
    </div>
  );
};
