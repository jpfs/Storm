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
    description: "A marca que une todos os board sports numa comunidade.",
    url: "https://storm.pt",
    siteName: "STORM",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STORM - From Sea to Street We Ride as One",
    description: "A marca que une todos os board sports numa comunidade.",
  },
};

export default function Page() {
  return <HomePage />;
}
