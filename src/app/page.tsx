import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
// import { LogoTicker } from "@/sections/LogoTicker";
// import { Pricing } from "@/sections/Pricing";
// import { ProductShowcase } from "@/sections/ProductShowcase";
// import { Testimonials } from "@/sections/Testimonials";
import {Intro} from "@/sections/Intro";
import Features from"@/sections/Features";
import Benefits from"@/sections/Benefits";
import WhyChooseUs from "@/sections/Choose"
import HowItWorks from "@/sections/HowItWorks"
// import { hydrateRoot } from 'react-dom/client';


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      {/* <ProductShowcase /> */}
      <Features />
      <Benefits />
      <WhyChooseUs />
      <HowItWorks />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}
