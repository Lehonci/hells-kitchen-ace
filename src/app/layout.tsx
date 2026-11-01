import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lehonci",
  description:
    "Mahasiswi Software Engineering IPB University yang berfokus pada data analytics, spatial data processing, serta data-driven AI automation.",
  keywords: [
    "Zafira Ryani Putri",
    "Data Analyst",
    "Data Engineer",
    "Software Engineering",
    "IPB University",
    "Spatial Engineering",
    "WebGIS",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Zafira Ryani Putri" }],
  openGraph: {
    title: "Zafira Ryani Putri — Software Engineering & Data",
    description: "Engineering data into meaningful decisions.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0A0A] text-[#F2F0EB] antialiased selection:bg-[#A8242F] selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

