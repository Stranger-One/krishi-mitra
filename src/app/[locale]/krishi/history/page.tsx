import HistoryComp from "@/components/krishi/History";
import Topbar from "@/components/krishi/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="history" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <HistoryComp />
      </div>
    </>
  );
}
