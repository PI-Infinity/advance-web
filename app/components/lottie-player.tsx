"use client";
import React, { useEffect, useRef } from "react";

export default function LottiePlayer(props: any) {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return React.createElement("lottie-player", {
    ref,
    ...props,
  });
}
