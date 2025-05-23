"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Music from "../music/Music";
import Shows from "../Shows/Shows";
import Footer from "../Footer/Footer";

const LandingPageClient = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Music />
      <Shows />
      <Footer />
    </div>
  );
};

export default LandingPageClient;
