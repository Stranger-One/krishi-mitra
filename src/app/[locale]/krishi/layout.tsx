import { Header } from "@/components/krishi/Header";
import { Footer } from "@/components/landing/Footer";



type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function KrishiLayout({ children, params }: Props) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
            {children}
            </main>
            <Footer/>
        </>
    )
}