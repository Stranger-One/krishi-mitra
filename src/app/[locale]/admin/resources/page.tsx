import AdminResourcesPage from "@/components/admin/Resources";
import Topbar from "@/components/admin/Topbar";

export default function Page () {
  return (
    <div>
        <Topbar location="resources" />
        <AdminResourcesPage/>
    </div>
  );
};
