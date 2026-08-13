import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { gilroy } from "@/fonts/gilroy";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.ogTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.shortName,
    title: site.ogTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gilroy.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col">
        <JsonLd />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <div className="page-enter flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
