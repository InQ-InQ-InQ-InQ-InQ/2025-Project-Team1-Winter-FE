import { Prompt } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const prompt = Prompt({
  variable: "--font-prompt",
  weight: "800",
});

export const metadata: Metadata = {
  title: "SpotShare",
  description: "포토스팟 공유 플랫폼",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
