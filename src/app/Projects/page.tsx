"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import data from "../../app/projects.json";
import "swiper/css";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [isList, setIsList] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

  const handleShowMore = (i: number) => {
    setShowMore((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="p-7 flex flex-col xl:gap-5">
      <h1
        data-aos="zoom-in"
        className="text-[20px] text-white text-center font-bold tracking-widest xl:text-[32px]">
        My <span className="text-[#27DEBF]">Projects</span>
      </h1>
      <button
        onClick={() => setIsList(!isList)}
        className={`w-[130px] bg-${
          isList ? "[#27DEBF]" : null
        } text-white cursor-pointer rounded-2xl px-3 py-[3px] text-[12px] md:text-[14px] transition-[0.2s] hover:scale-[1.1] active:scale-[1] my-5`}>
        Show as list
      </button>
      {isList ? (
        <section data-aos="flip-left" className="flex flex-col gap-10">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                data-aos="fade-up"
                className="flex flex-col p-2 shadow-[0_0_12px_2px_#27dec039] transition-[0.2s] rounded-[10px] hover:scale-[1.01]  hover:shadow-[0_0_12px_8px_#27DEBF66]">
                <div className="flex flex-col items-center gap-5 p-2 md:items-center md:flex-row md:justify-between   rounded-[10px]">
                  <div className="flex items-center gap-8">
                    <img
                      src={item.thumbnail}
                      className="w-[100px] md:w-[200px] rounded-[5px]"
                      alt={`${item.name} thumbnail`}
                    />
                    <h4 className="text-white font-semibold text-[13px]">
                      {item.name}
                    </h4>
                  </div>
                  <div className="flex justify-center items-center gap-3 xl:gap-7">
                    <button
                      onClick={() => handleShowMore(i)}
                      className="text-[#020202be] cursor-pointer text-[10px] md:text-[14px] pl-3 pr-2  font-semibold bg-[#27DEBF]  py-1 rounded-[5px] md:rounded-md xl:px-5 flex gap-1 items-center hover:scale-[1.04] transition-[0.2s]">
                      Show more
                      <img
                        className={`w-[12px] md:w-[20px] translate-y-[8%] ${
                          showMore[i] ? "rotate-[180deg]" : "rotate-0"
                        } transition-[0.2s]`}
                        src="/assets/icon-arrow-down.svg"
                        alt="arrow down icon"
                      />
                    </button>
                    <a
                      href={item.repo}
                      className="text-[#020202be] bg-[#27DEBF] px-3 py-1 rounded-[5px] md:rounded-md xl:px-5 flex items-center gap-1 text-[10px] md:text-[14px] font-semibold hover:scale-[1.04] transition-[0.2s]">
                      <img
                        src="/assets/icon-github-button.svg"
                        alt="github icon"
                        className="w-[12px] md:w-[20px]"
                      />
                      GitHub
                    </a>
                    <a
                      href={item.live}
                      className="text-[#020202be] text-[10px] md:text-[14px]  font-semibold bg-[#27DEBF] px-3 py-1 rounded-[5px] md:rounded-md xl:px-5 flex gap-1 items-center hover:scale-[1.04] transition-[0.2s]">
                      <img
                        src="/assets/icon-website.svg"
                        alt="website icon"
                        className="w-[12px] md:w-[20px]"
                      />
                      Live
                    </a>
                  </div>
                </div>
                <AnimatePresence>
                  {showMore[i] && (
                    <motion.p
                      key="description"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-[#ffffffb4] text-[12px] xl:text-[16px] text-center md:max-w-[700px] m-auto overflow-hidden">
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          )
        </section>
      ) : (
        <section data-aos="zoom-in" className="relative xl:p-5">
          <button
            className="absolute left-0 top-[50%]  translate-y-[-50%] cursor-pointer z-10"
            onClick={() => swiperRef.current?.slidePrev()}>
            <img
              className="filter brightness-80 hover:brightness-200 transition-0.2s hover:scale-[1.1]"
              src={"/assets/icon-back.svg"}
              alt="previous"
            />
          </button>
          <button
            className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer z-10"
            onClick={() => swiperRef.current?.slideNext()}>
            <img
              className="filter brightness-80 hover:brightness-200 transition-0.2s hover:scale-[1.1]"
              src={"/assets/icon-forward.svg"}
              alt="next"
            />
          </button>
          <Swiper
            style={{ padding: "30px" }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            slidesPerView={1}
            loop
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            modules={[Navigation, Autoplay]}>
            {data.map((item, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="cursor-grab active:cursor-grabbing hover:scale-[1.04] transition-[0.2s] flex flex-col justify-between gap-5 p-3 border-1 border-[#27dec000] rounded-[10px] bg-[#1e1e1e] shadow-[0_0_12px_2px_#27dec039] hover:shadow-[0_0_12px_8px_#27DEBF66]  xl:min-h-[600px] xl:p-8 xl:gap-8">
                  <div className="h-[200px] md:min-h-[300px] rounded-xl flex justify-center">
                    <img
                      src={item.thumbnail}
                      alt="project thumbnail"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-5 xl:gap-10">
                    <h2 className="text-center text-white text-[18px] xl:text-[28px]">
                      {item.name}
                    </h2>
                    <p className="text-[#ffffffb4] text-[12px] xl:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-3 xl:gap-7">
                    <a
                      href={item.repo}
                      className="text-[#020202be] bg-[#27DEBF] px-3 py-1 rounded-md xl:px-5 flex items-center gap-1 text-[14px] font-semibold hover:scale-[1.04] transition-[0.2s]">
                      <img
                        src="/assets/icon-github-button.svg"
                        alt="github icon"
                        className="w-[20px]"
                      />
                      GitHub
                    </a>
                    <a
                      href={item.live}
                      className="text-[#020202be] text-[14px] font-semibold bg-[#27DEBF] px-3 py-1 rounded-md xl:px-5 flex gap-1 items-center hover:scale-[1.04] transition-[0.2s]">
                      <img
                        src="/assets/icon-website.svg"
                        alt="website icon"
                        className="w-[20px]"
                      />
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </section>
  );
}
