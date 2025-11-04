import { CTASection } from "./components/cta-section";
import { FeaturesSection } from "./components/features-section";
import { HeroSection } from "./components/hero-section";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About Flame.js",
  description: "Learn about Flame.js, the type-safe full-stack TypeScript framework that revolutionizes modern web development with seamless AI integration and exceptional developer experience.",
  canonical: "/about",
  keywords: ["About Flame.js", "TypeScript framework", "Full-stack development", "Felipe Barcelos", "Open source"]
});

export default function AboutPage() {
  return (
    <div className="container md:max-w-screen-lg">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}





