import Header from "@/features/header";
import MainPage from "@/features/main-page";
import ScrollToTop from "@/features/scroll-to-top";
import SocialMedia from "@/features/social-media";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <MainPage />
      </main>
      <SocialMedia />
      <ScrollToTop />
    </div>
  );
}
