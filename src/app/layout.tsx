import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Roshan Shetty — Full Stack Engineer & AI/ML Engineer",
  description:
    "Portfolio of Roshan Shetty — Full Stack Developer, AI/ML Engineer, Data Scientist, IEEE Author, and Product Builder. Building intelligent systems that solve real problems.",
  keywords: [
    "Roshan Shetty",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Data Scientist",
    "IEEE Author",
    "Portfolio",
    "Machine Learning",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Roshan Shetty" }],
  openGraph: {
    title: "Roshan Shetty — Full Stack Engineer & AI/ML Engineer",
    description:
      "Building AI products, designing scalable systems, and turning ideas into impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
      </head>
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
