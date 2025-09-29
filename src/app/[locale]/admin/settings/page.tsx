import AdminSettingsPage from "@/components/admin/Settings";
import Topbar from "@/components/admin/Topbar";

export default function Page () {
  return (
    <div>
        <Topbar location="settings" />
        <AdminSettingsPage/>
    </div>
  );
};
