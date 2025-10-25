import Img from "./image";

export default function Footer() {
  return (
    <footer className="mt-20 w-full backdrop-blur-lg bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-10 pt-8 flex flex-col gap-6">
        {/* Brand */}
        <div className="flex flex-row items-center">
          <Img
            alt="logo"
            style={{ width: 48, height: 48 }}
            src={require("../../public/logo.png")}
          />
          <h1 className="text-2xl font-extrabold select-none cursor-pointer">
            Advance
          </h1>
        </div>
        <div className="flex items-center">
          {/* App Store */}
          <a
            href="https://apps.apple.com/ge/app/advnc/id6752962049"
            className="flex items-center justify-center rounded-2xl hover:scale-105 transition-transform p-3"
          >
            <img
              src="/apple-button.png"
              alt="Download on App Store"
              className="w-[120px] h-auto object-contain"
            />
          </a>

          {/* Google Play */}
          <a
            href="#download"
            onClick={() =>
              alert("ჯერჯერობით მიუწვდომელია, ვმუშაობთ ანდროიდის დამატებაზე!")
            }
            className="flex items-center justify-center rounded-2xl hover:scale-105 transition-transform  p-3"
          >
            <img
              src="/google-button.png"
              alt="Get it on Google Play"
              className="w-[120px] h-auto object-contain"
            />
          </a>
        </div>
        {/* Socials (placeholder links) */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-[#94A3B8] hover:text-indigo-600 transition transform hover:scale-110"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-[#94A3B8] hover:text-indigo-600 transition transform hover:scale-110"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[#94A3B8] hover:text-indigo-600 transition transform hover:scale-110"
          >
            Tiktok
          </a>
        </div>

        {/* Legal */}
        <p className="text-xs text-[#94A3B8] opacity-50">
          © 2025 Advance — ყველა უფლება დაცულია.
        </p>
      </div>
    </footer>
  );
}
