import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductSpotlight from "@/components/ProductSpotlight";
import BrandStory from "@/components/BrandStory";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-matte-black overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ProductSpotlight />
      <BrandStory />
      <EmailSignup />
      <Footer />
    </main>
  );
}
