import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AFADU - Rational Use of Medicines for a Healthier Kenya",
  description: "AFADU is dedicated to promoting the rational use of medicines to improve healthcare systems and community health across Kenya.",
  keywords: "healthcare, medicines, Kenya, public health, AMR, community health",
  openGraph: {
    title: "AFADU - Rational Use of Medicines for a Healthier Kenya",
    description: "AFADU is dedicated to promoting the rational use of medicines to improve healthcare systems and community health across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
