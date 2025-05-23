import React from "react";
import { MUSIC } from "@/constants/MUSIC";
const MusicNames = ({
  setSelectedIndex,
  selectedIndex,
}: {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedIndex: number;
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      {MUSIC.map((music, index) => (
        <button
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`rounded-full px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-xl border cursor-pointer border-foreground hover:bg-foreground/70 transition-all ease-in-out duration-300 hover:text-background hover:scale-105 active:scale-95 ${
            selectedIndex === index ? "font-bold border-2" : ""
          }`}
        >
          {music.name}
        </button>
      ))}
    </div>
  );
};

export default MusicNames;
