import Sidebar from "@/components/officer/Sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function OfficerLayout({ children, params }: Props) {
  return (
    <div className="h-screen bg-background flex ">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
