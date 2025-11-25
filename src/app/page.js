import Navbar from "@/components/Navbar";
import CTA from "@/sections/CTA";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import ProductDetailPage from "@/sections/ProdDetails";

import DropshippingDashboard from "@/sections/ProductList";
import Seamless from "@/sections/Seamless";
import Service from "@/sections/Service";
import SignIn from "@/sections/SignIn";


export default function Home() {
  return (
    <>
      {/* <Navbar />   */}
      <SignIn/>
      {/* <DropshippingDashboard/> */}
      {/* <ProductDetailPage/> */}
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
