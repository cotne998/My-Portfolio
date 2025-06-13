"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Introduction() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React Enthusiast",
      "Next.JS Developer",
      "Creative Coder",
      "Web Interface Specialist",
      "UI/UX Designer",
      "React & TypeScript Developer",
    ],
    loop: true,
  });

  return (
    <div className="flex flex-col gap-20 md:flex-row p-5 md:p-15 md:items-center xl:justify-center">
      <div className="flex flex-col w-full gap-3 md:max-w-[300px] xl:max-w-[500px] xl:gap-7">
        <h2 className="text-[16px] text-white xl:text-[28px]">Hello</h2>
        <p className="text-[18px] text-white font-bold xl:text-[34px]">
          My name is <span className="text-[#27DEBF]">TSOTNE TSINTSADZE</span>
        </p>
        <span className="text-[#27DEBF] xl:text-[24px]">
          <span className="text-white">I am</span>
          {` `}
          {text}
          <Cursor />
        </span>
      </div>
      <img
        className="w-[240px] md:w-[340px]"
        src="/assets/illustration.png"
        alt="illustration image"
      />
    </div>
  );
}
