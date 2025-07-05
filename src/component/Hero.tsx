"use client";
import { useEffect, useState } from "react";

const skills = ["Curious", "Creative", "Driven", "Perseverant"];

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;

    const currentSkill = skills[currentSkillIndex];

    if (typing) {
      if (displayedText.length < currentSkill.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        setTyping(false);
        deletingTimeout = setTimeout(() => setTyping(true), 1500);
      }
    } else {
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentSkill.slice(0, displayedText.length - 1));
        }, 200);
      } else {
        setTyping(true);
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayedText, typing, currentSkillIndex]);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden text-white"
    >
      {/* Background dot pattern */}
      <div className="fixed inset-0 -z-20 bg-[#070707] bg-[radial-gradient(#444cf7_0.5px,_transparent_0.5px)] bg-[length:10px_10px]" />

      {/* Rotating wave layers */}
      <div className="absolute inset-0 z-0">
        <div className="wave absolute left-0 top-0 w-full h-full bg-[#4973ff] shadow-inner transition-all duration-500">
          <span className="wave-layer absolute w-[325vh] h-[325vh] left-1/2 top-0 translate-x-[-50%] translate-y-[-3/4] bg-[#070707] rounded-[45%] animate-rotate1 z-10"></span>
          <span className="wave-layer absolute w-[325vh] h-[325vh] left-1/2 top-0 translate-x-[-50%] translate-y-[-3/4] bg-[#070707]/50 rounded-[40%] animate-rotate2 z-0"></span>
          <span className="wave-layer absolute w-[325vh] h-[325vh] left-1/2 top-0 translate-x-[-50%] translate-y-[-3/4] bg-[#070707]/50 rounded-[42.5%] animate-rotate3 z-0"></span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Pradnyal Gandhi
        </h1>
        <p className="text-2xl font-mono md:text-3xl max-w-xl mx-auto text-blue-500 font-semibold tracking-wider drop-shadow-lg">
          {displayedText}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
