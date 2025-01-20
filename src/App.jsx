import React, { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

import Header from "./components/Header";
import Hero from "./components/Hero";
import StripeSection from "./components/StripeSection";
import Projects from "./components/Projects";
import MarqueeSection from "./components/MarqueeSection";
import CTOSection from "./components/CTOSection";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className=" min-h-screen w-screen font-satoshi text-white bg-zinc-900 overflow-x-hidden ">
      <Header />
      <Hero />
      <StripeSection />
      <Projects />
      <MarqueeSection />
      <CTOSection />
      <Footer />
    </div>
  );
};

export default App;
