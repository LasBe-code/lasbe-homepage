import type { Metadata } from "next";
import "./globals.css";
import { Archivo_Black, Noto_Sans_KR } from "next/font/google";
import Provider from "@/app/_components/Provider";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--noto",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--archivo",
});

export const metadata: Metadata = {
  title: "장성우 포트폴리오",
  description: "프론트엔드 개발자 장성우 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKr.variable} ${archivo.variable} font-noto antialiased overflow-x-hidden text-neutral-900`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
