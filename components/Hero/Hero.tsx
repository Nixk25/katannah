import React from "react";
import MainHeadline from "./MainHeadline";
import HeroButtons from "./HeroButtons";
import KatannahImage from "./KatannahImage";

const Hero = () => {
  return (
    <div className="h-svh sticky z-1 top-0 w-vw px-4 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <MainHeadline />
      <KatannahImage />
      <HeroButtons />
    </div>
  );
};

export default Hero;
