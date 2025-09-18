import Alerts from "@/components/krishi/Alerts";
import Topbar from "@/components/krishi/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="alerts" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Alerts />
      </div>
    </>
  );
}
