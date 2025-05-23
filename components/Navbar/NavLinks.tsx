"use client";
import React, { useRef, useEffect } from "react";
import { NAVBAR_LINKS } from "@/constants/NAVBAR_LINKS";
import Link from "next/link";
import gsap from "gsap";

const NavLinks = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    const links = navRef.current.querySelectorAll(".nav-link");

    gsap.set(links, {
      opacity: 0,
      y: 10,
      filter: "blur(8px)",
    });

    gsap.to(links, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      duration: 0.6,
      ease: "power4.out",
      delay: 1,
    });
  }, []);

  return (
    <div ref={navRef} className="flex gap-5">
      {NAVBAR_LINKS.map((link) => (
        <div key={link.name} className="group nav-link" style={{ opacity: 0 }}>
          <Link href={link.href}>
            <span className="inline-block hover:scale-110 active:scale-90 hover:text-foreground text-foreground/90 transition-all ease-in-out duration-300">
              {link.name}
            </span>
          </Link>
          <div className="h-px bg-foreground w-full scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 origin-left" />
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
