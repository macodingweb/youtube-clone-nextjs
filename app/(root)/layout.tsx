import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export default function RootLayout({ children } : { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className=" flex">
        <Sidebar />
        {children}
      </div>
    </main>
  )
}