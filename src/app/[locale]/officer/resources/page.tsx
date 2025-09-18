import Topbar from "@/components/officer/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="resources" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* <Alerts /> */}
        Resources{" "}
      </div>
    </>
  );
}
