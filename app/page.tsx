"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./globals.css";
import { AppContextWrapper } from "./context/app";
import { useEffect } from "react";
import LottiePlayer from "./components/lottie-player";

export default function Home() {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
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
          top: "-600px",
          left: 0,
          zIndex: -1,
          transform: "rotate(90deg)",
        }}
      />

      <Header />
      <Hero />
      <Features />
      <Footer />
    </AppContextWrapper>
  );
}
