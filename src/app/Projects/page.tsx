"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import data from "../../app/projects.json";
import "swiper/css";

export default function ProjectsPage() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="p-7 flex flex-col xl:gap-5">
      <h1 className="text-[20px] text-white text-center font-bold tracking-widest xl:text-[32px]">
        My <span className="text-[#27DEBF]">Projects</span>
      </h1>
      <section className="relative xl:p-5">
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
                <img
                  src={item.thumbnail}
                  alt="project thumbnail"
                  className="rounded-[10px]"
                />
                <div className="flex flex-col gap-5 xl:gap-10">
                  <h2 className="text-center text-white text-[18px] xl:text-[28px]">
                    {item.name}
                  </h2>
                  <p className="text-white text-[12px] xl:text-[16px]">
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
    </section>
  );
}
