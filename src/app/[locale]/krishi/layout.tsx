import { Header } from "@/components/krishi/Header";
import Sidebar from "@/components/krishi/Sidebar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function KrishiLayout({ children, params }: Props) {
  return (
    <div className="min-h-screen bg-background">
        <Sidebar />
      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          {/* <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button> */}

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" />
            </div>
            <div className="flex flex-1 justify-end">
              <Button variant="outline" size="sm">
                हिंदी
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
