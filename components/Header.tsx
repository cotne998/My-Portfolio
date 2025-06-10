"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navigation: string[] = ["Home", "About", "Projects", "Resume"];

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <>
      <header
        style={{ padding: "15px" }}
        className="flex justify-between bg-[#313131] items-center">
        <h2 className="text-[20px] text-[#27DEBF]">TT</h2>
        <img
          src="/assets/icon-hamburger.png"
          alt="menu icon"
          className="cursor-pointer"
          onClick={() => setDisplayMenu(!displayMenu)}
        />
      </header>
      <AnimatePresence>
        {displayMenu && (
          <>
            <motion.nav
              style={{ padding: "15px" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.15 }}
              className="fixed right-0 top-0 h-full bg-[#272727] w-[180px] shadow-xl">
              <ul className="flex flex-col gap-5">
                {navigation.map((item, index) => {
                  return (
                    <li
                      className="text-white"
                      key={index}
                      onClick={() => setDisplayMenu(false)}>
                      <Link href={`/${item}`}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
