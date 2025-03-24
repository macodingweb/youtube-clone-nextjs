import { FastLinks, SideLinks } from "@/constants/sidebar";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

{/* <Link href={ele.explore} className="flex items-center gap-3 hover:bg-neutral-200 p-2 px-3 rounded-lg font-semibold">{ele.title} <MdOutlineKeyboardArrowRight size={22} /></Link> */}
{/* <span>{ele.title}</span> */}

export default function Sidebar() {
  return (
    <aside className="w-[300px] side-height overflow-y-scroll p-3">
      { SideLinks.map((ele, index) => (
        <ul className="main-list" key={index}>
          { "title" in ele && "explore" in ele ? (
            <Link href={ele.explore || ""} className="flex items-center gap-3 hover:bg-neutral-200 p-2 px-3 rounded-lg font-semibold">{ele.title} <MdOutlineKeyboardArrowRight size={22} /></Link>
          ) : (
            <span className="font-semibold block py-1.5 text-neutral-700 ml-3">{ele.title}</span>
          ) }
          <ul className="nested-list">
            { ele.links.map((link, index) => (
              <li className="list-item w-full" key={index}>
                <Link href={link.href} className={`flex items-center px-3 rounded-lg p-2 gap-6 ${ele.type != "people" ? "text-[14px]" : "text-[13px]"} ${"active" in link && "bg-neutral-200"} hover:bg-neutral-200`}>
                  <span className="icon">{"icon" in link ? link.icon : link.avatar as string && (
                    <div className="image w-[25px] h-[25px]">
                      <Image src={link.avatar && link.avatar} className="rounded-full h-full bg-neutral-300" alt="avatar" width={25} height={25} />
                    </div>
                  )}</span>
                  <span className="text truncate">{link.text}</span>
                </Link>
              </li>
            )) }
          </ul>
          <div className="break-line w-full h-[0.5px] bg-neutral-300 my-3"></div>
        </ul>
      )) }
      <div className="fast-links-container p-2">
        { FastLinks.map((list, index) => (
          <ul className="main-list flex flex-wrap text-[12px] mb-2 font-semibold text-neutral-600" key={index}>
            { list.map((ele, index) => (
              <li className="list-item py-0.5 px-1" key={index}>
                <Link href={ele.href}>{ele.text}</Link>
              </li>
            )) }
          </ul>
        )) }
        <div className="copy-right text-[12px] font-light mt-5 mb-1 text-neutral-400">
          &copy; 2025 Google LLC
        </div>
      </div>
    </aside>
  );
}
