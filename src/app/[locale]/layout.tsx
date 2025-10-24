import { Suspense } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import GA from "@/components/GA";
import "../globals.css";

export const metadata: Metadata = {
  title: "STORM - From Sea to Street We Ride as One",
  description: "A marca que une todos os board sports numa comunidade global.",
  icons: { icon: "/FAV_ICON.png", apple: "/FAV_ICON.png" },
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? "pt";

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || function(){dataLayer.push(arguments);};
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname + window.location.search,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-storm-white" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={null}>
            <Header />
            <GA />
          </Suspense>

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
