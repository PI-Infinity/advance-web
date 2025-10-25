"use client";
import { aboutGameContentKa } from "../data/aboutGameContentKa";
import { CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#38BDF8]">
          Advance?
        </h3>
        <p className="text-lg max-w-2xl mx-auto mt-4 text-[#94A3B8]">
          ეფექტური სწავლების სისტემა, რომელიც მორგებულია შენზე 🔥
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:gap-10">
        {aboutGameContentKa.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-3xl bg-[rgba(255,255,255,0.05)] shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center"
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-center">
              {item.title}
            </h4>

            <p className="opacity-80 text-center whitespace-pre-line leading-relaxed mb-4 text-[#94A3B8]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
