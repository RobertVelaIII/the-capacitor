import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import WhyCapacitor     from "@/components/WhyCapacitor";
import Features         from "@/components/Features";
import DesignedForBuilders from "@/components/DesignedForBuilders";
import ProductSpotlight from "@/components/ProductSpotlight";
import ProductSpecs     from "@/components/ProductSpecs";
import BrandStory       from "@/components/BrandStory";
import FAQ              from "@/components/FAQ";
import Countdown        from "@/components/Countdown";
import EmailSignup      from "@/components/EmailSignup";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-matte-black overflow-hidden">
      <Navbar />
      <Hero />
      <WhyCapacitor />
      <Features />
      <DesignedForBuilders />
      <ProductSpotlight />
      <ProductSpecs />
      <BrandStory />
      <FAQ />
      <Countdown />
      <EmailSignup />
      <Footer />
    </main>
  );
}
