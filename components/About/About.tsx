import React from "react";
import AboutVideo from "./AboutVideo";
import Headline from "../ui/Headline";

const About = () => {
  return (
    <section className="h-[300vh] relative z-2 bg-background ">
      <Headline>About</Headline>
      <p className="sm:max-w-[55%] px-4 sm:text-3xl text-xl leading-[1]">
        Hey, I&apos;m Katannah. rapper from Teplice, Czech Republic. I dropped
        my first track &quot;Bald&quot; in 2023, and in 2024 I stepped into the
        spotlight through the rap competition The Mag Wrap. That experience
        pushed me further, made me sharper and made me hungrier.
      </p>
      <AboutVideo />
    </section>
  );
};

export default About;
