"use client";
import AboutVideo from "./AboutVideo";
import Headline from "../ui/Headline";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
  const aboutText = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!aboutText.current) return;

    gsap.set(aboutText.current, { opacity: 0 });

    const split = new SplitText(aboutText.current, {
      type: "lines",
      mask: "lines",
    });

    gsap.set(split.lines, {
      opacity: 0,
      y: 200,
      filter: "blur(20px)",
    });

    gsap.set(aboutText.current, { opacity: 1 });

    gsap.to(split.lines, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      ease: "power4.out",
      duration: 0.6,
      scrollTrigger: {
        trigger: aboutText.current,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="h-[300vh] relative z-2 bg-background ">
      <Headline>About</Headline>
      <p
        ref={aboutText}
        className="sm:max-w-[55%] px-4 sm:text-3xl text-xl leading-[1]"
      >
        Hey, I&apos;m Katannah. rapper from Teplice, Czech Republic. I dropped
        my first track &quot;Bald&quot; in 2023, and in 2024 I stepped into the
        spotlight through the rap competition The Mag Wrap. That experience
        pushed me further, made me sharper and made me hungrier.
      </p>
      <AboutVideo />
    </section>
  );
};

export default About;
