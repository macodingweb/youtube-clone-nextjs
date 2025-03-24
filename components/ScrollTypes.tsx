"use client";

import { TypesLinks } from "@/constants/scrollTypes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function ScrollTypes() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setIsScrollEnd(scrollLeft > 0);
    setIsScrollStart(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  };

  useEffect(() => {
    const div = scrollRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }
    setIsScrollStart(true);
  }, []);

  return (
    <>
      {isScrollEnd && (
        <div className="left-scroll absolute left-0 top-0 z-50 p-1.5 h-fit flex pr-3 items-center justify-end">
          <div className="content bg-white pl-2">
            <button
              onClick={() => {
                scrollRef.current?.scrollBy({
                  left: -100,
                  behavior: "smooth",
                });
              }}
              className="scroll-right hover:bg-neutral-200 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft size={22} />
            </button>
          </div>
          <div className="px-6 h-[40px] bg-gradient-to-l from-transparent to-white"></div>
        </div>
      )}
      {isScrollStart && (
        <div className="right-scroll absolute right-0 top-0 z-50 p-1.5 pr-3 flex items-center justify-end">
          <div className="px-6  h-[40px] bg-gradient-to-r from-transparent to-white"></div>
          <div className="content bg-white pl-2">
            <button
              onClick={() => {
                scrollRef.current?.scrollBy({ left: 100, behavior: "smooth" });
              }}
              className="scroll-right hover:bg-neutral-200 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowRight size={22} />
            </button>
          </div>
        </div>
      )}
      <ul
        ref={scrollRef}
        onScroll={handleScroll}
        className="main-list-types relative py-2 flex w-full items-center overflow-x-auto overflow-y-visible gap-3"
      >
        {TypesLinks.map((ele, index) => (
          <li
            className={`list-item py-1.5 px-3 bg-neutral-100 rounded-lg text-[14px] font-semibold ${
              "active" in ele
                ? "bg-slate-950 text-white"
                : "transition-all hover:bg-neutral-200"
            }`}
            key={index}
          >
            <Link href={ele.link} className="whitespace-nowrap">
              {ele.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
