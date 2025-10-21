import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "STORM - From Sea to Street We Ride as One",
  description: "A marca que une todos os board sports numa comunidade global.",
  icons: {
    icon: "/FAV_ICON.png",
    apple: "/FAV_ICON.png",
  },
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // importante: params é Promise
  params: Promise<{ locale: string }>;
}) {
  // ✅ aguarda primeiro, só depois usa as propriedades
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? "pt";

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-storm-white" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
