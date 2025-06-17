"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Nav {
  name: string;
  path: string;
}

const navigation: Nav[] = [
  { name: "Home", path: "/assets/icon-home.svg" },
  { name: "About", path: "/assets/icon-person.svg" },
  { name: "Projects", path: "/assets/icon-project.svg" },
  { name: "Resume", path: "/assets/icon-document.svg" },
];

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <>
      <header className="p-[15px] flex justify-between bg-[#313131] items-center md:p-[20px] xl:px-25 z-100 fixed w-full">
        <h2 className="text-[20px] text-[#27DEBF] md:text-[24px]">TT</h2>
        {displayMenu ? (
          <AnimatePresence>
            <motion.img
              src={"/assets/icon-close.svg"}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 90 }}
              exit={{ opacity: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 13,
                duration: 0.2,
              }}
              alt="close icon"
              onClick={() => setDisplayMenu(false)}
              className="w-[20px] cursor-pointer md:hidden"
            />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.img
              className="w-[20px] cursor-pointer md:hidden"
              src={"/assets/icon-hamburger.svg"}
              alt="menu icon"
              onClick={() => setDisplayMenu(true)}
            />
          </AnimatePresence>
        )}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white xl:gap-15">
            {navigation.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#27DEBF] transition-[0.2s] xl:text-[18px] flex gap-2 items-center">
                  <img src={item.path} alt="" />
                  <Link href={`/${item.name}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <AnimatePresence>
        {displayMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 0.2, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                duration: 0.2,
              }}
              style={{ background: "#000" }}
              onClick={() => setDisplayMenu(false)}
            />
            <motion.nav
              initial={{ opacity: 1, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -300 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 23,
                bounce: 1,
                duration: 0.2,
              }}
              className="fixed top-0 w-full bg-[#272727] p-5 pt-20  shadow-xl z-50 md:hidden">
              <ul className="flex flex-col gap-5">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setDisplayMenu(false)}
                    className="text-white flex items-center gap-2">
                    <img src={item.path} alt="" className="w-[17px] " />
                    <Link href={`/${item.name}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
