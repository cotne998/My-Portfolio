"use client";
import Link from "next/link";
import { useState } from "react";
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
      <header className="p-[15px] flex justify-between bg-[#313131] items-center md:p-[20px] xl:px-25">
        <h2 className="text-[20px] text-[#27DEBF] md:text-[24px]">TT</h2>
        <img
          src="/assets/icon-hamburger.png"
          alt="menu icon"
          className="cursor-pointer md:hidden w-[20px]"
          onClick={() => setDisplayMenu(!displayMenu)}
        />
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
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ background: "#000" }}
              onClick={() => setDisplayMenu(false)}
            />
            <motion.nav
              style={{ padding: "15px" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.15 }}
              className="fixed right-0 top-0 h-full bg-[#272727] w-[180px] shadow-xl z-50">
              <ul className="flex flex-col gap-5 mt-25">
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
