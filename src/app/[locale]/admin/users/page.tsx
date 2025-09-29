import Topbar from "@/components/admin/Topbar";
import AdminUsersPage from "@/components/admin/Users";

export default function Page () {
  return (
    <div>
        <Topbar location="users" />
        <AdminUsersPage />
    </div>
  );
};
