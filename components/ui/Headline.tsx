"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Headline = ({ children }: { children: React.ReactNode }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    gsap.set(headlineRef.current, { opacity: 0 });

    const split = new SplitText(headlineRef.current, {
      type: "chars",
      mask: "chars",
    });

    gsap.set(split.chars, {
      opacity: 0,
      y: 200,
      filter: "blur(20px)",
    });

    gsap.set(headlineRef.current, { opacity: 1 });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      ease: "power4.out",
      duration: 0.6,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <h2
      ref={headlineRef}
      className="font-zodiak headline -tracking-wider leading-[0.8] mb-[100px] relative z-[9999] px-4"
      style={{ opacity: 0 }}
    >
      {children}
    </h2>
  );
};

export default Headline;
