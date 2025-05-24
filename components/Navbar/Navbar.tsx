"use client";
import React, { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    ScrollTrigger.create({
      start: 0,
      end: document.body.scrollHeight,
      onUpdate: () => {
        const currentScroll = window.scrollY;
        const navbar = navbarRef.current;
        if (!navbar) return;

        if (currentScroll > lastScrollY + 5) {
          gsap.to(navbar, {
            y: "-100%",
            duration: 0.4,
            ease: "power4.inOut",
          });
        } else if (currentScroll < lastScrollY - 5) {
          gsap.to(navbar, {
            y: "0%",
            duration: 0.4,
            ease: "power4.inOut",
          });
        }

        lastScrollY = currentScroll;
      },
    });
  }, []);

  return (
    <nav ref={navbarRef} className="p-4 fixed left-0 w-full top-0 z-10">
      <header className="flex items-center justify-between">
        <NavLinks />
      </header>
    </nav>
  );
};

export default Navbar;
