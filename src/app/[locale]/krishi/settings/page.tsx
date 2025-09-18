import SettingsComp from "@/components/krishi/Settings";
import Topbar from "@/components/krishi/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="settings" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <SettingsComp />
      </div>
    </>
  );
}
