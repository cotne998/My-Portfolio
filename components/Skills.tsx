"use client";
import icons from "../src/app/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skills: string[] = icons as string[];

export default function Skills() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="p-7 flex flex-col gap-5 xl:gap-15">
      <h2
        data-aos="zoom-in-up"
        className="text-[20px] text-[#27DEBF] font-semibold text-center">
        MY SKILLS
      </h2>
      <ul
        data-aos="zoom-in-up"
        className="flex flex-wrap gap-7 justify-center xl:gap-50">
        {skills.map((item, index) => (
          <li key={index}>
            <img
              src={item}
              alt="skill image"
              className="w-[50px] xl:w-[100px] hover:scale-[1.1] cursor-pointer transition-[0.2s]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
