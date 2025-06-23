import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Logo from "@/components/common/Logo";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-2 flex items-center">
        <Logo h={28} w={28}/>
      </header>
      <div className="min-h-screen flex flex-col pt-14">
        <main className="flex-1 flex flex-col gap-0">
          <HeroSection />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}
