"use client";

import { useEffect } from "react";
import LottiePlayer from "./components/lottie-player";
import { AppContextWrapper } from "./context/app";
import { initAnalytics } from "./lib/firebase";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </AppContextWrapper>
  );
}
