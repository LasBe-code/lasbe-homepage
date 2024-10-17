import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lasbe.kr/sitemap.xml",
    host: "https://lasbe.kr",
  };
}
