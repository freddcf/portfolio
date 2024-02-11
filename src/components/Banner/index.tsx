"use client";

import React from "react";
import Shape from "@/components/Banner/Shape";
import { CaretDown } from "@phosphor-icons/react";

export default function Banner() {
  return (
    <section className="h-[80vh] lg:h-[450px] flex flex-row justify-between md:items-center">
      <div className="flex-1 sm:h-full flex flex-col justify-around text-center sm:text-left">
        <div>
          <h1 className="font-lato font-bold text-4xl sm:text-6xl xl:text-7xl w-full md:w-[580px] lg:w-full">
            Programando ideias, ideais e idealizações
          </h1>
          <p className="text-lg sm:text-xl sm:translate-x-6 sm:w-[350px] mt-10 sm:mt-5 xl:mt-6">
            <span className="font-bold bg-slate-300 dark:bg-slate-600">
              Desenvolvedor FullStack,
            </span>{" "}
            criando experiências com comprometimento em encontrar{" "}
            <span className="bg-slate-300 dark:bg-slate-600">
              soluções criativas
            </span>{" "}
            que atendam às suas necessidades.
          </p>
        </div>
        <div className="flex flex-row items-center sm:mt-20 xl:mt-24">
          <div className="w-[50px] h-[50px] bg-slate-800 flex justify-center items-center">
            <CaretDown
              size={30}
              weight="bold"
              className="text-slate-50 animate-bounce"
            />
          </div>
          <span className="text-base text-slate-500 sm:text-sm ml-4">
            Scroll down
          </span>
        </div>
      </div>
      <div className="flex-1 h-full hidden lg:flex justify-end items-center">
        <Shape />
      </div>
    </section>
  );
}
