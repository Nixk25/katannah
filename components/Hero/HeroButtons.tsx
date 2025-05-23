"use client";
import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import gsap from "gsap";

const HeroButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonsRef.current) return;
    const buttons = buttonsRef.current.querySelectorAll("button");

    gsap.set(buttons, {
      opacity: 0,
      y: 10,
      filter: "blur(8px)",
    });

    gsap.to(buttons, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      duration: 0.6,
      ease: "power4.out",
      delay: 1.5,
    });
  }, []);

  return (
    <div ref={buttonsRef} className="bottom-4 absolute z-4 right-4 flex gap-5">
      <Button>Listen now</Button>
      <Button primary={false}>Booking</Button>
    </div>
  );
};

export default HeroButtons;
