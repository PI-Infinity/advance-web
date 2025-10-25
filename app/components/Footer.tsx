import Img from "./image";

export default function Footer() {
  return (
    <footer className="mt-20 w-full backdrop-blur-lg bg-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10 pt-8 flex flex-col gap-6">
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
            YouTube
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
