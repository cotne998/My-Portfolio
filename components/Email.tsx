"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Email() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="flex flex-col items-center p-10 gap-5">
      <h2
        data-aos="zoom-in-up"
        className="text-white text-[22px] font-bold text-center">
        YOU CAN CONTACT ME ON EMAIL
      </h2>
      <span data-aos="zoom-in-up" className="text-[#27DEBF]">
        cotnecincadze998@gmail.com
      </span>
    </div>
  );
}
