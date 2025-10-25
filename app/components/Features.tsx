"use client";
import { aboutGameContentKa } from "../data/aboutGameContentKa";
import { CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#38BDF8]">
          როგორ მუშაობს Advance?
        </h3>
        <p className="text-lg max-w-2xl mx-auto mt-4 text-[#94A3B8]">
          ეფექტური სწავლების სისტემა, რომელიც მორგებულია შენზე 🔥
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-10 md:gap-14">
        {aboutGameContentKa.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white/5 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#38BDF8]" /> {item.title}
            </h4>

            <p className="opacity-80 whitespace-pre-line leading-relaxed mb-4 text-[#94A3B8]">
              {item.content}
            </p>

            {item.subsections && (
              <ul className="space-y-4 mt-6">
                {item.subsections.map((sub: any, i: any) => (
                  <li key={i} className="border-l-4 border-indigo-500 pl-4">
                    <p className="font-semibold text-[#94A3B8] text-lg">
                      {sub.subtitle}
                    </p>
                    <p className="opacity-80 whitespace-pre-line text-gray-400 mt-4 leading-relaxed">
                      {sub.content}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
