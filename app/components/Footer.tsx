import Img from "./image";

export default function Footer() {
  return (
    <footer className="mt-20 w-full backdrop-blur-lg bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-10 pt-8 flex flex-col gap-6">
        {/* Brand */}
        <div className="flex flex-row items-center gap-3">
          <Img
            alt="Advance logo"
            style={{ width: 48, height: 48 }}
            src={require("../../public/logo.png")}
          />
          <div className="text-2xl font-extrabold select-none">Advance</div>
        </div>

        {/* Brand description (SEO-friendly, updated for multiple languages) */}
        <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
          <strong className="text-white/80 font-semibold">Advance</strong> არის
          უცხო ენების სასწავლო პლატფორმა ქართულად — ინგლისური, გერმანული და სხვა
          ენები ერთ სივრცეში. ისწავლე ლექსიკა, გრამატიკა და გამოიყენე AI
          სასაუბრო პრაქტიკა ყოველდღიურად.
        </p>

        {/* Store buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://apps.apple.com/ge/app/advnc/id6752962049"
            aria-label="Download Advance on App Store"
            className="flex items-center justify-center rounded-2xl hover:scale-105 transition-transform"
          >
            <img
              src="/apple-button.png"
              alt="Download on App Store"
              className="w-[140px] h-auto object-contain"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.advance.ena.app"
            aria-label="Download Advance on Google Play"
            className="flex items-center justify-center rounded-2xl hover:scale-105 transition-transform"
          >
            <img
              src="/google-button.png"
              alt="Get it on Google Play"
              className="w-[140px] h-auto object-contain"
            />
          </a>
        </div>

        {/* Socials */}
        <nav className="flex gap-6" aria-label="Social links">
          <a
            href="https://www.facebook.com/share/17qbM7NYqH/?mibextid=wwXIfr"
            className="text-[#94A3B8] hover:text-sky-400 transition transform hover:scale-110"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/advnc.pro"
            className="text-[#94A3B8] hover:text-sky-400 transition transform hover:scale-110"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@advance2202"
            className="text-[#94A3B8] hover:text-sky-400 transition transform hover:scale-110"
          >
            TikTok
          </a>
        </nav>

        {/* Legal */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-xs text-[#94A3B8] opacity-50">
            © 2026 Advance — ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
}
