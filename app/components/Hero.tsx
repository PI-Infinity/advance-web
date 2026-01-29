// app/components/Hero.tsx
import React, { useState } from "react";
import { useAppContext } from "../context/app";
import { trackDownload } from "../lib/analytics";

export default function Hero() {
  const { isMobile } = useAppContext();
  const [open, setOpen] = useState(false);

  const iosUrl = "https://apps.apple.com/ge/app/advnc/id6752962049";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.advance.ena.app";

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-32 pb-28 sm:py-48 text-center px-6 flex flex-col items-center"
    >
      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* ✅ ეს არის მთავარი H1 (ქივორდი პირდაპირ) */}
        <h1
          className="
    py-4
    text-4xl md:text-6xl
    font-extrabold tracking-tight
    leading-[1.2] md:leading-[1.12]
  "
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            ინგლისურის სწავლა ონლაინ
          </span>
          <span className="block text-white">
            ქართულად, მარტივად და ეფექტურად
          </span>
        </h1>

        <p className="mt-4 text-base md:text-lg max-w-3xl leading-relaxed text-slate-300">
          ლექსიკა, გრამატიკა, კითხვა და სასაუბრო პრაქტიკა
          <br className="hidden sm:block" /> ერთ სივრცეში — ისწავლე ეფექტურად და
          პრაქტიკულად.
        </p>

        <div className="hidden sm:flex flex-row justify-center items-center gap-0 mt-8 px-0 sm:px-24">
          <a
            href={iosUrl}
            className="flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition-transform p-3"
          >
            <img
              src="/apple-button.png"
              alt="Download Advance on App Store"
              className="w-[280px] h-auto object-contain"
            />
          </a>

          <a
            href={androidUrl}
            className="flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition-transform p-3"
          >
            <img
              src="/google-button.png"
              alt="Download Advance on Google Play"
              className="w-[280px] h-auto object-contain"
            />
          </a>
        </div>

        <div className="sm:hidden w-full mt-8 px-2">
          <button
            onClick={() => setOpen(true)}
            className="
              w-full max-w-sm mx-auto
              rounded-2xl px-5 py-4
              font-bold text-base
              bg-sky-500 text-white
              shadow-lg shadow-sky-500/20
              active:scale-[0.99] transition
            "
          >
            გადმოწერა
          </button>
          <p className="mt-3 text-xs text-slate-400">
            აირჩიე შენი პლატფორმა — iOS ან Android
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Close"
          />

          <div className="relative w-full rounded-t-3xl bg-slate-900 border border-slate-800 p-5">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-700" />

            <h2 className="text-white text-lg font-extrabold">
              აირჩიე პლატფორმა
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              რომელზე გინდა გადმოწერა?
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href={iosUrl}
                onClick={() => trackDownload("ios")}
                className="
                  w-full rounded-2xl p-4
                  bg-white/5 border border-white/10
                  text-white font-semibold
                  active:scale-[0.99] transition
                "
              >
                🍎 App Store (iOS)
              </a>

              <a
                href={androidUrl}
                onClick={() => trackDownload("android")}
                className="
                  w-full rounded-2xl p-4
                  bg-white/5 border border-white/10
                  text-white font-semibold
                  active:scale-[0.99] transition
                "
              >
                🤖 Google Play (Android)
              </a>

              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-2xl p-4 text-slate-300 font-semibold bg-white/0 border border-slate-700"
              >
                გაუქმება
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
