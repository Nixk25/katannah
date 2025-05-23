"use client";
import React, { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navbarRef.current) return;
    const navbar = navbarRef.current;
    const navbarHeight = navbarRef.current.offsetHeight;

    const st = ScrollTrigger.create({
      start: `top+=${navbarHeight * 2} top`,
      end: "bottom bottom",
      onUpdate: (self) => {
        const scrollingDown = self.direction > 0;

        if (scrollingDown) {
          gsap.to(navbar, {
            y: "-100%",
            duration: 0.6,
            ease: "power4.inOut",
          });
        } else {
          gsap.to(navbar, {
            y: 0,
            duration: 0.5,
            ease: "power4.out(0.3)",
          });
        }
      },
    });

    return () => {
      st.kill();
    };
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
