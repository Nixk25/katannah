import React from "react";
import Headline from "../ui/Headline";
import { SHOWS } from "@/constants/SHOWS";

const Shows = () => {
  return (
    <section
      id="shows"
      className="bg-background pb-[20vh] relative z-4 overflow-hidden "
    >
      <Headline>Shows</Headline>
      <span className="text-3xl sm:text-6xl px-4 inline-block mb-5">MAY</span>
      {SHOWS.map((show, index) => (
        <div
          key={index}
          className="px-4 border-t first:border-b py-4 sm:py-6 border-white flex justify-between last:border-b items-center text-xs sm:text-3xl "
        >
          <div className="flex gap-5">
            <span>{show.date}</span>
            <span>{show.name}</span>
          </div>
          <div>
            <span>{show.description}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Shows;
