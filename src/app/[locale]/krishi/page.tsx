import Dashboard from "@/components/krishi/Dashboard";
import Topbar from "@/components/krishi/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="dashboard" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Dashboard />
      </div>
    </>
  );
}
