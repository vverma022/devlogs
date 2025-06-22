import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col gap-0">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
