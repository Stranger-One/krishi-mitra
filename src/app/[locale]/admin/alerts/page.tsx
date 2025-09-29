import AdminAlertsPage from "@/components/admin/Alerts";
import Topbar from "@/components/admin/Topbar";

export default function Page() {
  return (
    <div>
      <Topbar location="alerts" />
      <AdminAlertsPage />
    </div>
  );
}
