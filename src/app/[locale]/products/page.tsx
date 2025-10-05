import ProductsPage from "./ProductPage";

export const metadata = {
  title: "Products - STORM",
  description: "BRAIN STORM COLLECTION - From Sea to Street We Ride as One",
  keywords:
    "storm, products, brain storm collection, surf, skate, snowboard, streetwear, lifestyle, portugal",
  authors: [{ name: "STORM" }],
  openGraph: {
    title: "Products - STORM",
    description: "BRAIN STORM COLLECTION - From Sea to Street We Ride as One",
    url: "https://storm.pt/products",
    siteName: "STORM",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "https://storm.pt/images/seo/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "STORM - Brain Storm Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - STORM",
    description: "BRAIN STORM COLLECTION - From Sea to Street We Ride as One",
    images: ["https://storm.pt/images/seo/og-products.jpg"],
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function Page() {
  return <ProductsPage />;
}
