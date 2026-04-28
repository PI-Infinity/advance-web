import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://advnc.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ✅ უნივერსალური სათაური (ინგლისური + სხვა ენები)
  title: {
    default: "Advance – ისწავლე უცხო ენები AI-ით | №1 ქართული აპი",
    template: "%s | Advance",
  },

  // ✅ გაფართოებული აღწერა უფრო ფართო აუდიტორიისთვის
  description:
    "ისწავლე ინგლისური და სხვა უცხო ენები Advance აპით: AI საუბრის პრაქტიკა, გრამატიკა და ლექსიკა ერთ სივრცეში. დაიწყე უფასოდ დღესვე.",

  // ✅ Canonical + Robots
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ✅ OpenGraph (სოციალური ქსელებისთვის)
  openGraph: {
    title: "Advance – ისწავლე უცხო ენები AI-ით | №1 ქართული აპი",
    description:
      "AI საუბრის პრაქტიკა, გრამატიკა და სიტყვები — ყველაფერი ერთ აპში. ისწავლე ინგლისური და სხვა ენები ქართულად.",
    url: siteUrl,
    siteName: "Advance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advance App - Language Learning Platform",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  // ✅ Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Advance – ისწავლე უცხო ენები AI-ით",
    description:
      "ინგლისური და სხვა უცხო ენები ერთ სივრცეში. დაიწყე სწავლა ქართულად დღესვე.",
    images: ["/og-image.png"],
  },

  // ✅ Icons / favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className="bg-[#0F172A] text-white">
        {/* ✅ Structured Data */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Advance",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
