import { Metadata } from "next";

export const metadata = {
  title: "Advance – ინგლისური ენის სასწავლო უნივერსალური პლატფორმა",
  description: "მეტი ცოდნა ყოველდღიურად!",
  keywords: [
    "Advance",
    "English Learning",
    "ინგლისური",
    "inglisuri",
    "ინგლისურის სწავლა",
    "inglisuris swavla",
  ],

  // ✅ Social preview settings
  openGraph: {
    title: "Advance – ინგლისური ენის სასწავლო უნივერსალური პლატფორმა",
    description: "მეტი ცოდნა ყოველდღიურად! 🌟",
    url: "https://advnc.pro",
    siteName: "Advance",
    images: [
      {
        url: "https://advnc.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advance App Social Preview",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  // ✅ Twitter cards
  twitter: {
    card: "summary_large_image",
    title: "Advance – ინგლისური ენის სასწავლო უნივერსალური პლატფორმა",
    description: "მეტი ცოდნა ყოველდღიურად!",
    images: ["https://advnc.pro/og-image.png"],
  },

  // ✅ Favicon & Icons (თუ გაქვს)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-512.png",
    apple: "/apple-touch-icon.png",
  },

  // ✅ For Crawlers
  metadataBase: new URL("https://advnc.pro"),
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="ka">
      <body className="text-black bg-[#0F172A] text-white">{children}</body>
    </html>
  );
}
