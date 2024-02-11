"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useThemeSwitch from "../../Hooks/useThemeSwitch";
import { MoonIcon, SunIcon } from ".././icons";
import Image from "next/image";

export default function Header() {
  const [mode, setMode] = useThemeSwitch();
  const [colapsableMenu, setColapsableMenu] = useState(false);
  useEffect(() => {
    if (colapsableMenu) {
      document.body.classList.add("overflow-y-hidden");
      window.scrollTo({ top: 0 });
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [colapsableMenu]);

  return (
    <header className="flex items-center justify-between h-20 mb-16 w-full">
      <div className="font-semibold text-xl flex items-center gap-3">
        {mode === "dark" ? (
          <Image src="/logo-light.svg" width={40} height={40} alt="logo" />
        ) : (
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
        )}
        FredFonseca
      </div>

      <nav className="flex flex-row w-full items-center">
        <div className="flex flex-1 justify-end items-center gap-8 xl:gap-10 text-base xl:text-lg font-medium">
          <Link href="/" className="hidden md:flex">
            Home
          </Link>
          <Link href="/" className="hidden md:flex">
            Portfolio
          </Link>
          <Link href="/about" className="hidden md:flex">
            Sobre
          </Link>
          <Link
            href="/contact"
            className="bg-slate-800 dark:bg-slate-50 text-slate-50 dark:text-slate-800 py-2 px-5 rounded-md hidden md:flex"
          >
            Contato
          </Link>

          <button
            className="w-6 h-6"
            onClick={() =>
              setMode(mode === "light" || mode === "initial" ? "dark" : "light")
            }
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <button
          className="w-[20px] h-[20px] ml-6 flex md:hidden flex-col justify-between cursor-pointer"
          onClick={() => setColapsableMenu(!colapsableMenu)}
        >
          <div className="w-[100%] h-[2px] bg-slate-800 dark:bg-slate-50"></div>
          <div className="w-[100%] h-[2px] bg-slate-800 dark:bg-slate-50"></div>
          <div className="w-[100%] h-[2px] bg-slate-800 dark:bg-slate-50"></div>
        </button>

        {colapsableMenu && (
          <div className="absolute top-[100px] h-[calc(100vh-100px)] w-[100%] left-0 flex justify-center items-center bg-slate-50 dark:bg-slate-800 z-10">
            <nav className="flex flex-col justify-center items-center gap-[50px] text-4xl">
              <Link href="/" onClick={() => setColapsableMenu(!colapsableMenu)}>
                Home
              </Link>
              <Link href="/" onClick={() => setColapsableMenu(!colapsableMenu)}>
                Portfolio
              </Link>
              <Link href="/" onClick={() => setColapsableMenu(!colapsableMenu)}>
                Sobre
              </Link>
              <Link href="/" onClick={() => setColapsableMenu(!colapsableMenu)}>
                Contato
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
