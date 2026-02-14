import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Nguyen Thanh Nam — Solution Engineer & Cloud Architect",
  description: "Senior Solution Engineer and Cloud Architect specializing in scalable data systems, AI-driven platforms, and cloud-native architecture.",
  authors: [{ name: "Nguyen Thanh Nam" }],
  openGraph: {
    title: "Nguyen Thanh Nam — Solution Engineer & Cloud Architect",
    description: "Designing scalable data systems and AI-driven platforms with reliability and real-world impact.",
    type: "website",
    images: ["https://nam-s-architecture.vercel.app/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NamTit",
    images: ["https://nam-s-architecture.vercel.app/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
