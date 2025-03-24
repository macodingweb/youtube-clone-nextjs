"use client";

import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <nav className="w-full px-5 flex items-center justify-between py-1">
      <div className="logo-container flex items-center gap-5">
        <div className="exchange-btn transition-all rounded-full hover:bg-neutral-200 flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
          <SlMenu />
        </div>
        <Link href={"/"}>
          <div className="logo-content flex">
            <div className="logo">
              <Image src={"/logo.png"} alt="YouTube Logo" width={100} height={100} />
            </div>
            <span className="country text-[10px] text-neutral-500 pt-2">EG</span>
          </div>
        </Link>
      </div>
      <form className="search-container flex items-center">
        <div className="form-group flex items-center">
          <div className={`form-input-container w-full flex items-center border-[1px] rounded-l-[50px] rounded-r-[50px] border-solid ${isFocus ? "border-blue-500" : "border-neutral-300"}`}>
            <div className={`icon pl-4 ${isFocus ? "block" : "hidden"}`}>
              <CiSearch size={22} />
            </div>
            <input type="search" name="search-query" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} placeholder="Search" className="h-[40px] w-[500px] px-5 outline-0" />
            <button type="submit" className={`h-[40px] bg-neutral-100 px-6 hover:bg-neutral-200 cursor-pointer border-solid border-0 border-l-[1px] rounded-r-[50px] ${isFocus ? "border-l-blue-500" : "border-l-neutral-300"} `}>
              <CiSearch size={22} />
            </button>
          </div>
        </div>
        <button type="button" className="w-[40px] hover:bg-neutral-200 ml-5 cursor-pointer bg-neutral-100 h-[40px] flex items-center justify-center rounded-full">
          <HiMicrophone size={20} />
        </button>
      </form>
      <div className="user-container flex items-center gap-5">
        <div className="create-section flex items-center py-2 cursor-pointer hover:bg-neutral-200 px-4 bg-neutral-100 rounded-[50px]">
          <button type="button" className="flex items-center cursor-pointer">
            <GoPlus size={26} />
            <span className="ml-2">Create</span>
          </button>
        </div>
        <div className="notification-section">
          <button type="button" className="w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-neutral-200 flex items-center justify-center">
            <IoNotificationsOutline size={22} />
          </button>
        </div>
        <div className="user-section">
          <button type="button" className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-slate-300 overflow-hidden cursor-pointer">
            <Image src={"/user.jpg"} alt="User Image" width={40} height={40} className="object-cover h-[40px]"/>
          </button>
        </div>
      </div>
    </nav>
  )
}