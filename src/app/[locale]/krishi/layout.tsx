import Sidebar from "@/components/krishi/Sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function KrishiLayout({ children, params }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main content */}
      <div className="lg:pl-64">{children}</div>
    </div>
  );
}
