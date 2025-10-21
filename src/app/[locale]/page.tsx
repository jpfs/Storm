import HomePage from "./HomePage";

export const metadata = {
  title: "STORM - From Sea to Street We Ride as One",
  description:
    "A marca que une todos os board sports numa comunidade global. Celebrating the life of riding on any board, any ground, in any storm.",
  keywords:
    "storm, board sports, surf, skate, snowboard, streetwear, lifestyle, portugal",
  authors: [{ name: "STORM" }],
  openGraph: {
    title: "STORM - From Sea to Street We Ride as One",
    description:
      "A marca que une todos os board sports numa comunidade global. Celebrating the life of riding on any board, any ground, in any storm.",
    url: "https://storm.pt",
    siteName: "STORM",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "https://storm.pt/images/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STORM - From Sea to Street We Ride as One",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STORM - From Sea to Street We Ride as One",
    description:
      "A marca que une todos os board sports numa comunidade global. Celebrating the life of riding on any board, any ground, in any storm.",
    images: ["https://storm.pt/images/seo/og-image.jpg"],
  },
  icons: {
    shortcut: "/FAV_ICON.png",
    icon: "/FAV_ICON.png",
    apple: "/FAV_ICON.png",
  },
};

export default function Page() {
  return <HomePage />;
}
