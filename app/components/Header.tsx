// app/components/Header.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Img from "./image";
import { useAppContext } from "../context/app";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { activeSection, scrollToSection } = useAppContext();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/2 border-b border-white/5 transition-all py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between pb-2 pt-0 sm:py-4 px-2 pr-6 sm:px-6">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Img
              alt="Advance logo"
              style={{ width: 72, height: 72 }}
              src={require("../../public/logo.png")}
            />

            {/* ❗️SEO: Header-ში h1 არ უნდა იყოს (მთავარი H1 Hero-ში) */}
            <div className="text-4xl font-extrabold select-none">Advance</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 backdrop-blur-2xl px-6 py-2 rounded-full border border-white/5 shadow-sm">
            <div
              onClick={() => scrollToSection("features")}
              className={`font-medium transition cursor-pointer ${
                activeSection === "features" ? "text-[#38BDF8]" : "text-white"
              } ${activeSection === "features" ? "hover:opacity-100" : "hover:opacity-70"}`}
            >
              ფუნქციები
            </div>

            <div
              onClick={() => scrollToSection("hero")}
              className={`font-medium transition cursor-pointer ${
                activeSection === "hero" ? "text-[#38BDF8]" : "text-white"
              } ${activeSection === "hero" ? "hover:opacity-100" : "hover:opacity-70"}`}
            >
              გადმოწერა
            </div>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[#0F172A] backdrop-blur-xl flex items-center justify-center flex-col gap-8 transition-all duration-300 z-50
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          className="absolute top-6 right-6 p-2 bg-black/10 rounded-full"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div
          onClick={() => {
            scrollToSection("hero");
            setOpen(false);
          }}
          className={`font-medium transition cursor-pointer ${
            activeSection === "hero" ? "text-[#38BDF8]" : "text-white"
          } ${activeSection === "hero" ? "hover:opacity-100" : "hover:opacity-70"}`}
        >
          გადმოწერა
        </div>

        <div
          onClick={() => {
            scrollToSection("features");
            setOpen(false);
          }}
          className={`font-medium transition cursor-pointer ${
            activeSection === "features" ? "text-[#38BDF8]" : "text-white"
          } ${activeSection === "features" ? "hover:opacity-100" : "hover:opacity-70"}`}
        >
          ფუნქციები
        </div>
      </div>
    </>
  );
}
