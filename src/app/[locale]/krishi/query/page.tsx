import Query from "@/components/krishi/Query";
import Topbar from "@/components/krishi/Topbar";

export default function Page() {
  return (
    <>
      <Topbar location="askQuery" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Query />
      </div>
    </>
  );
}
