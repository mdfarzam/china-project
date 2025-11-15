import Navbar from "@/components/Navbar";
import CTA from "@/sections/CTA";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Seamless from "@/sections/Seamless";
import Service from "@/sections/Service";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Features />
      <Seamless />
      <Pricing />
      <Faqs />
      <CTA />
      <Footer/>
    </>
  );
}
