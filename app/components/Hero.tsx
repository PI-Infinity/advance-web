import { Apple, Play } from "lucide-react";
import { useAppContext } from "../context/app";
import LottiePlayer from "./lottie-player";

export default function Hero() {
  const { isMobile } = useAppContext();
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-48 pb-48 text-center px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 to-white pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Title */}
        <h2
          style={{ lineHeight: isMobile ? "48px" : "72px" }}
          className="py-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#38BDF8]"
        >
          ინგლისური ენის
          <br />
          სასწავლო აპლიკაცია
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl text-[#94A3B8]">
          მეტი ნასწავლი სიტყვა ყოველდღე!
          <br />
          გაიუმჯობესე ცოდნა!
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full px-8 sm:px-24">
          <a
            href="https://apps.apple.com/ge/app/advnc/id6752962049"
            style={{
              width: "100%",
              height: "72px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            className="flex items-center gap-3 bg-black text-white  rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <Apple size={26} />
            Apple Store (iOS)
          </a>

          <a
            href="#download"
            onClick={() =>
              alert("ჯერჯერობით მიუწვდომელია, ვმუშაობთ ანდროიდის დამატებაზე!")
            }
            style={{
              width: "100%",
              height: "72px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            className="flex items-center gap-3 bg-[#38BDF8] text-white rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <Play size={26} /> Google Playe (Android)
          </a>
        </div>
      </div>
    </section>
  );
}
