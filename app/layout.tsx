// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://advnc.pro"),

  // ✅ ქივორდი წინ, ბრენდი ბოლოს (უფრო ძლიერი SEO)
  title: "ინგლისურის სწავლა ონლაინ ქართულად | Advance",
  description:
    "Advance — ინგლისურის სასწავლო აპლიკაცია ქართულად: სიტყვები, გრამატიკა, საკითხავი ტექსტები და AI პრაქტიკა ერთ სივრცეში.",

  // ✅ Canonical + Robots (Google-სთვის მნიშვნელოვანი)
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

  openGraph: {
    title: "ინგლისურის სწავლა ონლაინ ქართულად | Advance",
    description:
      "სიტყვები, გრამატიკა, საკითხავი ტექსტები და AI პრაქტიკა — ყველაფერი ერთ აპში.",
    url: "https://advnc.pro",
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

  twitter: {
    card: "summary_large_image",
    title: "ინგლისურის სწავლა ონლაინ ქართულად | Advance",
    description:
      "Advance — ინგლისურის სასწავლო აპლიკაცია ქართულად: სიტყვები, გრამატიკა, საკითხავი ტექსტები და AI პრაქტიკა.",
    images: ["/og-image.png"],
  },

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
      <body className="bg-[#0F172A] text-white">{children}</body>
    </html>
  );
}
