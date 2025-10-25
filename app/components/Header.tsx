"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Img from "./image";
import { useAppContext } from "../context/app";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { activeSection, scrollToSection } = useAppContext();

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/2 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* LOGO */}
          <div className="flex flex-row items-center">
            <Img
              alt="logo"
              style={{ width: 72, height: 72 }}
              src={require("../../public/logo.png")}
            />
            <h1 className="text-4xl font-extrabold select-none cursor-pointer">
              Advance
            </h1>
          </div>

          {/* Desktop NAV */}
          <nav className="hidden md:flex items-center gap-6 backdrop-blur-2xl px-6 py-2 rounded-full border border-white/5 shadow-sm">
            <div
              onClick={() => scrollToSection("features")}
              className={`font-medium transition ${
                activeSection === "features"
                  ? "hover:opacity-[1]"
                  : "hover:opacity-[0.7]"
              } cursor-pointer ${
                activeSection === "features" ? "text-[#38BDF8]" : "text-white"
              }`}
            >
              ფუნქციები
            </div>

            <div
              onClick={() => scrollToSection("hero")}
              className={`font-medium transition${
                activeSection === "hero"
                  ? "hover:opacity-[1]"
                  : "hover:opacity-[0.7]"
              } cursor-pointer ${
                activeSection === "hero" ? "text-[#38BDF8]" : "text-white"
              }`}
            >
              გადმოწერა
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={`fixed inset-0 bg-[#0F172A] backdrop-blur-xl flex items-center justify-center flex-col gap-8 transition-all duration-300 z-50
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        `}
      >
        <button
          className="absolute top-6 right-6 p-2 bg-black/10 rounded-full"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        <div
          onClick={() => {
            scrollToSection("hero");
            setOpen(false);
          }}
          className={`font-medium transition${
            activeSection === "hero"
              ? "hover:opacity-[1]"
              : "hover:opacity-[0.7]"
          } cursor-pointer ${
            activeSection === "hero" ? "text-[#38BDF8]" : "text-white"
          }`}
        >
          გადმოწერა
        </div>

        <div
          onClick={() => {
            scrollToSection("features");
            setOpen(false);
          }}
          className={`font-medium transition${
            activeSection === "features"
              ? "hover:opacity-[1]"
              : "hover:opacity-[0.7]"
          } cursor-pointer ${
            activeSection === "features" ? "text-[#38BDF8]" : "text-white"
          }`}
        >
          ფუნქციები
        </div>
      </div>
    </>
  );
}
