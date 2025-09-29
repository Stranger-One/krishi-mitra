import AdminDashboardPage from "@/components/admin/Dashboard";
import Topbar from "@/components/admin/Topbar"

export default function Page () {
  return (
    <div>
        <Topbar location="dashboard" />
        <AdminDashboardPage />
    </div>
  );
};
