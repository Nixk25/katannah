"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const MainHeadline = () => {
  const headline = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headline.current) return;

    // Nejdříve skryjeme celý headline
    gsap.set(headline.current, { opacity: 0 });

    const split = new SplitText(headline.current, {
      type: "chars",
      mask: "chars",
    });

    gsap.set(split.chars, {
      opacity: 0,
      y: 200,
      filter: "blur(20px)",
    });

    gsap.set(headline.current, { opacity: 1 });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      ease: "power4.out",
      duration: 0.6,
      delay: 0.3,
    });
  }, []);

  return (
    <h1
      ref={headline}
      className="font-zodiak mainHeadline absolute top-[15%] z-2 -tracking-wider leading-[0.8]"
      style={{ opacity: 0 }}
    >
      Katannah
    </h1>
  );
};

export default MainHeadline;
