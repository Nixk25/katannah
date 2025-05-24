import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-background relative h-[1000px] z-4"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="bg-foreground fixed h-[700px] w-full bottom-0 rounded-tr-[50px] rounded-tl-[50px]  sm:rounded-tl-[100px] flex justify-between items-center sm:rounded-tr-[100px] flex-col">
        <h2 className="text-background bookingHeadline leading-[0.2]">
          Booking
        </h2>
        <a
          href="mailto:barbora.papirnikova@umusic.com"
          className="text-background text-md lg:text-7xl"
        >
          barbora.papirnikova@umusic.com
        </a>
        <h2 className="text-background bookingHeadline leading-[0.5]">
          Katannah
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
