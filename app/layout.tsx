export const metadata = {
  title: "Advance – ისწავლე ინგლისური აპით",
  description:
    "Interactive English learning app with vocabulary, phrases and audio exercises.",
  keywords: ["Advance", "English Learning", "ინგლისური"],
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="ka">
      <body className="text-black bg-[#0F172A] text-white">{children}</body>
    </html>
  );
}
