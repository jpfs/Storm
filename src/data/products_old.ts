// src/data/products.ts

export interface ColorVariant {
  name: string;
  hex: string;
  images: {
    main: string;
    gallery: string[];
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  features: string[];
  // Imagem principal para o catálogo
  catalogImage: string;
  // Variações de cor com suas próprias imagens
  colorVariants: ColorVariant[];
}

// PRODUTOS
export const products: Product[] = [
  {
    id: "1",
    slug: "struggle",
    name: "STRUGGLE",
    description:
      "Oversized T-shirt | 100% Cotton Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
    features: [
      "200 g/m²",
      "100% cotton",
      "Knitted",
      "Single Jersey",
      "Casual oversized cut",
      "Dropped shoulders",
      "Ribbed crew neck",
    ],
    // Imagem que aparece no catálogo/listagem
    catalogImage: "/images/products/catalog/STORM-left.jpg",
    // Diferentes variações de cor com suas próprias fotos
    colorVariants: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: {
          main: "/images/products/catalog/STORM-left.jpg",
          gallery: [
            "/images/products/catalog/struggle/white/STORM_STUDIO-169.jpg",
            "/images/products/catalog/struggle/white/STORM_STUDIO-172.jpg",
            "/images/products/catalog/struggle/white/BACK_STRUGGLE_WHITE.jpg",
            "/images/products/catalog/struggle/white/BACK_STRUGGLE_WHITE2.jpg",
          ],
        },
      },
      {
        name: "Beige",
        hex: "#F5E6D3",
        images: {
          main: "/images/products/catalog/struggle/bege/STORM_STUDIO-185.jpg",
          gallery: [
            "/images/products/catalog/struggle/bege/STORM_STUDIO-178.jpg",
            "/images/products/catalog/struggle/bege/STORM_STUDIO-131.jpg",
            "/images/products/catalog/struggle/bege/STORM_STUDIO-178.jpg",
            "/images/products/catalog/struggle/bege/STORM_STUDIO-99.jpg",
            "/images/products/catalog/struggle/bege/STORM_STUDIO-98.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "2",
    slug: "simple",
    name: "SIMPLE",
    description:
      "Oversized T-shirt | 100% Cotton Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
    features: [
      "200 g/m²",
      "100% cotton",
      "Knitted",
      "Single Jersey",
      "Casual oversized cut",
      "Dropped shoulders",
      "Ribbed crew neck",
    ],
    catalogImage: "/images/products/catalog/STORM-center.jpg",
    colorVariants: [
      {
        name: "Bege",
        hex: "#F5E6D3",
        images: {
          main: "/images/products/catalog/STORM-center.jpg",
          gallery: [
            "/images/products/catalog/simple/STORM_OUT_25-09.jpg",
            "/images/products/catalog/simple/STORM_OUT_25-13.jpg",
            "/images/products/catalog/simple/STORM_OUT_25-12.jpg",
            "/images/products/catalog/simple/STORM_STUDIO-28.jpg",
            "/images/products/catalog/simple/STORM_STUDIO-36.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "3",
    slug: "how-to",
    name: "HOW TO",
    description:
      "Oversized T-shirt | 100% Cotton Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
    features: [
      "100% Premium Cotton",
      "Oversized Fit",
      "Ribbed Crew Neck",
      "Creative Design",
      "Machine Washable",
    ],
    catalogImage: "/images/products/catalog/STORM-right.jpg",
    colorVariants: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: {
          main: "/images/products/catalog/STORM-right.jpg",
          gallery: [
            "/images/products/catalog/how to/white/STORM_STUDIO-193.jpg",
            "/images/products/catalog/how to/white/STORM_STUDIO-193 2.jpg",
            "/images/products/catalog/how to/white/STORM_STUDIO-109.jpg",
            "/images/products/catalog/how to/white/STORM_STUDIO-119.jpg",
          ],
        },
      },
      {
        name: "Black",
        hex: "#000000",
        images: {
          main: "/images/products/catalog/STORM-right.jpg",
          gallery: [
            "/images/products/catalog/how to/black/STORM_STUDIO-50.jpg",
            "/images/products/catalog/how to/black/STORM_STUDIO-51.jpg",
            "/images/products/catalog/how to/black/STORM_STUDIO-154.jpg",
            "/images/products/catalog/how to/black/STORM_STUDIO-161.jpg",
            "/images/products/catalog/how to/black/STORM_STUDIO-222.jpg",
          ],
        },
      },
    ],
  },
];

// FUNÇÃO PARA BUSCAR PRODUTO POR SLUG
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// FUNÇÃO PARA BUSCAR TODOS OS PRODUTOS
export function getAllProducts(): Product[] {
  return products;
}
