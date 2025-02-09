import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soluciones KyJ-Construcción y Obras Civiles en Colombia",
  description:
    "Soluciones KyJ es una empresa líder en la construcción de obras civiles en Colombia. Ofrecemos proyectos de infraestructura, edificación y urbanismo con calidad y seguridad.",
  keywords: [
    "Soluciones KyJ",
    "construcción en Colombia",
    "obras civiles",
    "infraestructura",
    "edificación",
    "urbanismo",
    "ingeniería civil",
    "empresa constructora",
  ],
  openGraph: {
    title: "Soluciones KyJ-Expertos en Construcción y Obras Civiles",
    description:
      "Empresa constructora colombiana especializada en infraestructura, edificación y urbanismo. Calidad y seguridad en cada proyecto.",
    url: "https://solucioneskyj.com", // Actualiza con el dominio real
    siteName: "Soluciones KyJ",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
