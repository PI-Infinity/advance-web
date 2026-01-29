"use client";
import { aboutGameContentKa } from "../data/aboutGameContentKa";

export default function Features() {
  return (
    <section
      id="features"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#38BDF8]">
          რატომ Advance?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mt-4 text-[#94A3B8] leading-relaxed md:leading-[1.6]">
          ეფექტური ინგლისურის სწავლების სისტემა, რომელიც მორგებულია შენზე
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:gap-10">
        {aboutGameContentKa.map((item, index) => {
          const Icon: any = item.icon;

          return (
            <div
              key={index}
              className="
                p-6 sm:p-8
                rounded-3xl
                bg-[rgba(255,255,255,0.05)]
                shadow-xl hover:shadow-2xl
                transition duration-300
                flex flex-col items-center
                text-center
              "
            >
              {Icon && (
                <div
                  className="mb-4 flex items-center justify-center rounded-xl"
                  style={{
                    width: 56,
                    height: 56,
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  <Icon className="text-3xl" style={{ color: item.color }} />
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-[#94A3B8] opacity-90 whitespace-pre-line leading-relaxed md:leading-[1.7]">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
