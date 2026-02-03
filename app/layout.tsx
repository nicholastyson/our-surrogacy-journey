import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nick & Daniel | Independent Surrogacy Journey | Intended Parents Canada",
  description: "Gay couple from Paris with embryos ready at Victory Reproductive Care (Canada). Seeking an altruistic connection with an independent surrogate to help grow our family.",
  keywords: [
    "independent surrogacy Canada",
    "looking for surrogate Canada",
    "intended parents Canada",
    "surrogacy journey",
    "Canadian surrogate",
    "LGBTQ surrogacy",
    "gay couple surrogacy",
    "find a surrogate Canada",
    "surrogacy partnership",
    "gestational surrogacy Canada"
  ],
  authors: [{ name: "Nick & Daniel" }],
  openGraph: {
    title: "Nick & Daniel | Independent Surrogacy Canada",
    description: "A loving couple looking for an independent surrogate in Canada to help grow our family. Read our story and learn about the partnership we hope to build.",
    type: "website",
    locale: "en_CA",
    siteName: "Nick & Daniel's Surrogacy Journey",
    images: [
      {
        url: "/images/Monello-Tyson-00032-biking in California.jpeg",
        width: 1200,
        height: 630,
        alt: "Nick and Daniel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick & Daniel | Independent Surrogacy Canada",
    description: "A loving couple looking for an independent surrogate in Canada to help grow our family.",
    images: ["/images/Monello-Tyson-00032-biking in California.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Nick & Daniel | Independent Surrogacy Canada",
              description: "A loving couple looking for an independent surrogate in Canada to help grow our family.",
              url: "/",
              mainEntity: {
                "@type": "Person",
                name: "Nick & Daniel",
                description: "Intended parents looking for a surrogate in Canada",
                knowsAbout: ["Surrogacy", "Independent Surrogacy", "Canadian Surrogacy"],
              },
            }),
          }}
        />
      </head>
      <body className={`${lora.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
