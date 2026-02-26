import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Nguyen Thanh Nam — Software Engineer",
  description: "Designing scalable data systems and AI-driven platforms with a focus on reliability, cost efficiency, and real-world impact. Full stack engineer, distributed architectures, data engineering, API ecosystems, and cloud-native systems.",
  authors: [{ name: "Nguyen Thanh Nam" }],
  openGraph: {
    title: "Nguyen Thanh Nam — Software Engineer",
    description: "Designing scalable data systems and AI-driven platforms with a focus on reliability, cost efficiency, and real-world impact. Full stack engineer, distributed architectures, data engineering, API ecosystems, and cloud-native systems.",
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
