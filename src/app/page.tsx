import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero"
import {Intro} from "@/sections/Intro";
import Features from"@/sections/Features";
import Benefits from"@/sections/Benefits";
import WhyChooseUs from "@/sections/Choose"
import HowItWorks from "@/sections/HowItWorks"


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Benefits />
      <WhyChooseUs />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}
