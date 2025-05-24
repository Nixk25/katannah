import React, { useState } from "react";
import Headline from "../ui/Headline";
import MusicNames from "./MusicNames";
import MusicImages from "./MusicImages";

const Music = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="music" className="bg-background relative z-4 overflow-hidden ">
      <Headline>Music</Headline>
      <div className="flex justify-between gap-8 items-center px-4 relative">
        <MusicNames
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <MusicImages
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </section>
  );
};

export default Music;
