import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <h1>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <PricingSection />
        <Testimonials />
        <Footer />
      </div>
    </h1>
  );
}
