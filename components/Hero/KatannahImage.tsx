"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const KatannahImage = () => {
  useEffect(() => {
    gsap.set("#mainImage", {
      filter: "blur(30px)",
    });

    gsap.to("#mainImage", {
      filter: "blur(0px)",
      duration: 3,
      ease: "power4.out",
    });
  }, []);

  return (
    <div
      id="mainImage"
      className="absolute inset-0 z-3 h-full w-full bg-[url('/katannahmaska.webp')] bg-cover bg-top bg-no-repeat select-none"
      style={{ filter: "blur(30px)" }}
    />
  );
};

export default KatannahImage;
