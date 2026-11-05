import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";
import "./globals.css";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
  },
  icons: {
    icon: "/gravity-mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
