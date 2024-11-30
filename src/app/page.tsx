import Header from "@/features/home/header";
import MainPage from "@/features/home/main-page";
import ScrollToTop from "@/features/home/scroll-to-top";
import SocialMedia from "@/features/home/social-media";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://wismannur.pro/");

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
