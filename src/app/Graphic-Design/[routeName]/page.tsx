"use client";
import { useState } from "react";
import data from "../../graphic-projects.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface PageProps {
  params: {
    routeName: string;
  };
}

export default function Page({ params }: PageProps) {
  const project = data.find((item) => item.route === params.routeName);
  const [currentPath, setCurrentPath] = useState<string | undefined>(
    project?.children?.images?.[0] ?? undefined
  );
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className="p-5 relative flex flex-col items-center gap-15">
        <section className="w-full md:w-[450px] xl:w-[900px] flex flex-col gap-3 md:gap-7 xl:gap-10">
          <h1
            data-aos="fade-down"
            className="text-[#27DEBF] text-[28px] text-center font-bold">
            {project?.name}
          </h1>
          <p
            data-aos="fade-down"
            className="text-white text-[12px] md:text-[14px] xl:text-[16px]">
            {project?.description}
          </p>
          <section className="flex items-center gap-4 xl:gap-7 h-[200px] md:h-[270px] xl:h-[400px]">
            <div
              data-aos="fade-right"
              className="h-[200px] md:h-[270px] xl:h-[400px] flex flex-col gap-3 md:gap-5 xl:gap-7 overflow-y-auto overflow-x-hidden scrollbar-hide pr-5">
              {project?.children?.images?.map((item, i) => (
                <div
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[90px] xl:h-[90px] cursor-pointer flex-shrink-0"
                  key={i}>
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[10px] hover:opacity-[0.7] transition-[0.2s]"
                    onClick={() => setCurrentPath(item)}
                    src={item}
                  />
                </div>
              ))}
            </div>
            <div
              data-aos="fade-left"
              id="wrapper"
              className="flex h-full w-full">
              <img
                data-aos="flip-left"
                loading="lazy"
                className="object-contain w-full h-full rounded-2xl bg-black"
                src={currentPath}
                onClick={() => setOpen(true)}
                alt="example image"
              />
            </div>
          </section>
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#00000074] z-10"
                  onClick={() => setOpen(false)}
                />
                {/* სურათი */}
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  src={currentPath}
                  alt="lightbox"
                  className="w-[70%] md:h-[70%] md:w-[unset] xl:h-[75%] h-auto z- object-cover xl:translate-y-[5%] m-auto rounded-xl z-20 relative"
                />
              </div>
            )}
          </AnimatePresence>
        </section>

        <button className="text-[#020202be] bg-[#27DEBF] text-[12px] md:text-[14px] xl:text-[16px] rounded-2xl px-5 py-2 font-semibold cursor-pointer hover:bg-[#7decda] transition-[0.2s]">
          <Link href={"/Graphic-Design"}>Back to projects</Link>
        </button>
      </div>
    </>
  );
}
