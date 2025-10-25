import { Apple, Play } from "lucide-react";
import { useAppContext } from "../context/app";
import LottiePlayer from "./lottie-player";
import Img from "./image";

export default function Hero() {
  const { isMobile } = useAppContext();
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-32 pb-28 sm:py-48 text-center px-6 flex flex-col items-center"
    >
      {/* Background Glow */}
      {/* {isMobile && (
        <LottiePlayer
          src="/animations/cover.json"
          background="transparent"
          speed="1"
          autoplay
          loop
          style={{
            width: "360px",
            height: "400px",
          }}
        />
      )} */}

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
        <Img
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
          }}
          src={require("../../public/apple-button.png")}
        />

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-0 mt-10 px-0 sm:px-24">
          {/* App Store */}
          <a
            href="https://apps.apple.com/ge/app/advnc/id6752962049"
            className="flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition-transform p-3"
          >
            <img
              src="/apple-button.png"
              alt="Download on App Store"
              className="w-[240px] h-auto object-contain"
            />
          </a>

          {/* Google Play */}
          <a
            href="#download"
            onClick={() =>
              alert("ჯერჯერობით მიუწვდომელია, ვმუშაობთ ანდროიდის დამატებაზე!")
            }
            className="flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition-transform  p-3"
          >
            <img
              src="/google-button.png"
              alt="Get it on Google Play"
              className="w-[240px] h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
