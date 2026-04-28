import React from "react";

export const Seo = () => {
  return (
    <section id="seo" className="w-full px-4 sm:px-10 py-8 pt-0 sm:py-20">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-6 sm:p-10">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(55%_55%_at_20%_40%,rgba(34,211,238,0.10),transparent_60%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs sm:text-sm text-white/80">
              Language Learning • Georgia
            </span>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-white">
            უცხო ენების სწავლა ონლაინ ქართულად
          </h2>

          <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl">
            <strong className="text-white">Advance</strong> არის ინოვაციური
            სასწავლო აპლიკაცია ქართულად, რომელიც დაგეხმარებათ{" "}
            <strong className="text-white">უცხო ენების ათვისებაში</strong>{" "}
            მარტივად და სახალისოდ. აპში ერთ სივრცეში მოცემულია:
            სიტყვების/ფრაზების სწავლა, გრამატიკა, საკითხავი ტექსტები და{" "}
            <strong className="text-white">AI სასაუბრო პრაქტიკა</strong>.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl">
            თუ ეძებთ საუკეთესო გზას{" "}
            <strong className="text-white">ენების სასწავლად ქართულად</strong>{" "}
            პირდაპირ ტელეფონიდან, Advance გთავაზობთ სრულ ეკოსისტემას ნებისმიერი
            დონის მომხმარებლისთვის.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "ინგლისურის და სხვა ენების სწავლა (A1–C1)",
              "გრამატიკული კურსები ქართულ განმარტებებით",
              "ინტერაქტიული სავარჯიშოები ლექსიკის გასამყარებლად",
              "პერსონალური AI მასწავლებელი 24/7-ზე",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#38BDF8]" />
                <div className="text-slate-200 text-sm leading-relaxed">
                  {t}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
            <p className="text-slate-300 text-sm">
              ჩამოტვირთე{" "}
              <span className="text-white font-semibold">Advance</span> iOS-ზე
              ან Android-ზე და დაადექი ენების სწავლის პროფესიონალურ გზას.
            </p>
          </div>

          {/* Structured Data (განახლებული აღწერა) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Advance",
                applicationCategory: "EducationalApplication",
                operatingSystem: "iOS, Android",
                url: "https://advnc.pro",
                description:
                  "უცხო ენების სწავლა ონლაინ ქართულად: ინგლისური და სხვა ენები, სიტყვები, გრამატიკა და AI პრაქტიკა ერთ აპლიკაციაში.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "GEL" },
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};
