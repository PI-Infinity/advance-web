// app/page.tsx
"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./globals.css";
import { AppContextWrapper } from "./context/app";
import { useEffect } from "react";
import LottiePlayer from "./components/lottie-player";
import { Seo } from "./components/seo";
import { initAnalytics } from "./lib/firebase";

export default function Home() {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <AppContextWrapper>
      <LottiePlayer
        src="/animations/bg.json"
        background="transparent"
        speed="1"
        autoplay
        loop
        style={{
          width: "1920px",
          height: "1920px",
          position: "fixed",
          top: "-500px",
          left: 0,
          zIndex: -1,
          transform: "rotate(90deg)",
        }}
      />

      {/* ✅ SEO ტექსტური სექცია (დიზაინს არ აფუჭებს, Google-ს ძალიან ეხმარება) */}
      <main className="w-full flex flex-col gap-2 items-center">
        <Header />
        <Hero />
        <Features />

        {/* SEO Content Block */}
        <Seo />

        <Footer />
      </main>
    </AppContextWrapper>
  );
}
