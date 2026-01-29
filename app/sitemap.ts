import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://advnc.pro", lastModified: new Date() },
    // დაამატე შენი ყველა მთავარი გვერდი
  ];
}
