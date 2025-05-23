"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutVideo = () => {
  const sectionRef = useRef(null);
  const headlinesRef = useRef(null);
  const headlineRefs = useRef<HTMLSpanElement[]>([]);

  const addToHeadlineRefs = (el: HTMLSpanElement | null) => {
    if (!el) return;
    if (!headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const headlines = headlinesRef.current;
    const spans = headlineRefs.current;

    if (!section || !headlines || spans.length !== 3) return;

    gsap.set(spans, {
      x: "100%",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });

    tl.to(
      spans[0],
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      },
      0
    );

    tl.to(
      spans[1],
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      },
      0.2
    );

    tl.to(
      spans[2],
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      },
      0.4
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div ref={sectionRef} className="sticky top-0 z-20 h-screen">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/videoAbout.mov"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div
        ref={headlinesRef}
        className="absolute right-0 top-1/2 overflow-x-hidden -translate-y-1/2 flex flex-col gap-10 z-10 text-right"
      >
        <span ref={addToHeadlineRefs} className="aboutSpanHeadline font-black">
          Creative
        </span>
        <span ref={addToHeadlineRefs} className="aboutSpanHeadline font-black">
          Young
        </span>
        <span ref={addToHeadlineRefs} className="aboutSpanHeadline font-black">
          Hungry
        </span>
      </div>
    </div>
  );
};

export default AboutVideo;
