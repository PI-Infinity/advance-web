// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://advnc.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ✅ ძლიერი CTR + ბრენდინგი (და გვერდებზე template)
  title: {
    default: "Advance – ინგლისურის სწავლა AI-ით | №1 ქართული აპი",
    template: "%s | Advance",
  },

  // ✅ უფრო “მარკეტინგული” აღწერა + CTA
  description:
    "ისწავლე ინგლისური Advance აპით: AI საუბრის პრაქტიკა, გრამატიკა და სიტყვები ერთ სივრცეში. უფასოდ დაიწყე დღესვე.",

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

  // ✅ OpenGraph (social preview + Google-brand signals)
  openGraph: {
    title: "Advance – ინგლისურის სწავლა AI-ით | №1 ქართული აპი",
    description:
      "AI საუბრის პრაქტიკა, გრამატიკა და სიტყვები — ყველაფერი ერთ აპში. დაიწყე უფასოდ დღესვე.",
    url: siteUrl,
    siteName: "Advance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advance App Social Preview",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  // ✅ Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Advance – ინგლისურის სწავლა AI-ით | №1 ქართული აპი",
    description:
      "AI საუბრის პრაქტიკა, გრამატიკა და სიტყვები ერთ სივრცეში. დაიწყე უფასოდ დღესვე.",
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
        {/* ✅ Structured Data (Google rich snippet/sitelinks შანსი) */}
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
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
