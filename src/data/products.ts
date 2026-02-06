export interface ColorVariant {
  name: {
    pt: string;
    en: string;
  };
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
  description: {
    pt: string;
    en: string;
  };
  features: {
    pt: string[];
    en: string[];
  };
  catalogImage: string;
  colorVariants: ColorVariant[];
  categories: string[];
}

// 🔹 Exemplo da estrutura real — copia o teu conteúdo original dentro deste formato
export const products: Product[] = [
  {
    id: "1",
    slug: "struggle",
    name: "STRUGGLE",
    description: {
      en: "<strong> Oversized T-shirt | 100% Cotton </strong> <p>Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
      pt: "<strong> T-shirt Oversized | 100% Algodão </strong> <p>Confeccionada em algodão premium para máximo conforto. Esta t-shirt oversized oferece um corte descontraído e um estilo sem esforço. A gola canelada acrescenta um detalhe subtil, enquanto o design na parte frontal e traseira a transforma numa verdadeira peça de destaque.",
    },
    features: {
      en: [
        "200 g/m²",
        "100% cotton",
        "Knitted",
        "Single Jersey",
        "Casual oversized cut",
        "Dropped shoulders",
        "Ribbed crew neck",
      ],
      pt: [
        "200 g/m²",
        "100% algodão",
        "Malha",
        "Jersey simples",
        "Corte casual oversized",
        "Ombros descaídos",
        "Gola canelada",
      ],
    },
    catalogImage: "/images/products/catalog/STORM-left.jpg",
    colorVariants: [
      {
        name: { en: "White", pt: "Branco" },
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
        name: { en: "Beige", pt: "Bege" },
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
    categories: ["tshirts"],
  },
  {
    id: "2",
    slug: "simple",
    name: "SIMPLE",
    description: {
      en: "<strong> Oversized T-shirt | 100% Cotton </strong> <p> Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
      pt: "<strong> T-shirt Oversized | 100% Algodão </strong> <p> Confeccionada em algodão premium para máximo conforto. Esta t-shirt oversized oferece um corte descontraído e um estilo sem esforço. A gola canelada acrescenta um detalhe subtil, enquanto o design na parte frontal e traseira a transforma numa verdadeira peça de destaque.",
    },
    features: {
      en: [
        "200 g/m²",
        "100% cotton",
        "Knitted",
        "Single Jersey",
        "Casual oversized cut",
        "Dropped shoulders",
        "Ribbed crew neck",
      ],
      pt: [
        "200 g/m²",
        "100% algodão",
        "Malha",
        "Jersey simples",
        "Corte casual oversized",
        "Ombros descaídos",
        "Gola canelada",
      ],
    },
    catalogImage: "/images/products/catalog/STORM-center.jpg",
    colorVariants: [
      {
        name: { en: "Beige", pt: "Bege" },
        hex: "#F5E6D3",
        images: {
          main: "/images/products/catalog/STORM-center.jpg",
          gallery: [
            "/images/products/catalog/simple/STORM_OUT_25-09.jpg",
            "/images/products/catalog/simple/STORM_OUT_25-13.jpg",
            "/images/products/catalog/simple/STORM_OUT_25-12.jpg",
            "/images/products/catalog/simple/STORM_STUDIO-36.jpg",
          ],
        },
      },
    ],
    categories: ["store", "tshirts"],
  },
  {
    id: "3",
    slug: "how-to",
    name: "HOW TO",
    description: {
      en: "<strong> Oversized T-shirt | 100% Cotton </strong> <p> Crafted from premium cotton for maximum comfort. This oversized tee delivers a relaxed fit and effortless style. The ribbed crew neck adds a subtle detail, while the design on both the front and back makes it a true statement piece.",
      pt: "<strong> T-shirt Oversized | 100% Algodão </strong> <p> Confeccionada em algodão premium para máximo conforto. Esta t-shirt oversized oferece um corte descontraído e um estilo sem esforço. A gola canelada acrescenta um detalhe subtil, enquanto o design na parte frontal e traseira a transforma numa verdadeira peça de destaque.",
    },
    features: {
      en: [
        "200 g/m²",
        "100% cotton",
        "Knitted",
        "Single Jersey",
        "Casual oversized cut",
        "Dropped shoulders",
        "Ribbed crew neck",
      ],
      pt: [
        "200 g/m²",
        "100% algodão",
        "Malha",
        "Jersey simples",
        "Corte casual oversized",
        "Ombros descaídos",
        "Gola canelada",
      ],
    },
    catalogImage: "/images/products/catalog/STORM-right.jpg",
    colorVariants: [
      {
        name: { en: "Black", pt: "Preto" },
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
      {
        name: { en: "White", pt: "Branco" },
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
    ],
    categories: ["tshirts"],
  },
  {
    id: "4",
    slug: "Storm-cap",
    name: "Storm Cap",
    description: {
      en: "<strong> Bombazine Cap | 100% Cotton </strong> <p> A modern take on a classic, this Cap is crafted from premium bombazine corduroy for a soft, textured feel. With subtle embroidery details—an icon at the front and our logo at the back—it blends timeless style with a contemporary edge. Available in three versatile colors.",
      pt: "<strong> Boné Bombazine | 100% Algodão </strong> <p> Uma releitura moderna de um clássico, o Boné é feito em bombazine de algodão para um toque macio e textura marcante. Com bordados subtis, um ícone na frente e o nosso logo como detalhe nas costas — combina estilo atemporal com uma abordagem contemporânea. Disponível em três cores versáteis.",
    },
    features: {
      en: [
        "100% Cotton (Corduroy)",
        "6 panels",
        "Soft unstructured crown",
        "Heritage styling",
        "Cotton twill sweatband and interior taping",
        "Self fabric strap with silver effect buckle and grommet",
      ],
      pt: [
        "100% algodão (canelado)",
        "6 painéis",
        "Copa macia e sem estrutura",
        "Estilo clássico",
        "Banda de suor e fita interior em sarja de algodão",
        "Tira do mesmo tecido com fivela e ilhó em efeito prateado",
      ],
    },
    catalogImage: "/images/products/catalog/storm_hat/STORM_CAPS-11.jpg",
    colorVariants: [
      {
        name: { en: "Brown", pt: "Castanho" },
        hex: "#94693f",
        images: {
          main: "/images/products/catalog/STORM_CAPS-14.jpg",
          gallery: [
            "/images/products/catalog/storm_hat/STORM_CAPS-14.jpg",
            "/images/products/catalog/storm_hat/STORM_CAPS-16.jpg",
          ],
        },
      },
      {
        name: { en: "Green", pt: "Verde" },
        hex: "#2b372b",
        images: {
          main: "/images/products/catalog/STORM_CAPS-14.jpg",
          gallery: [
            "/images/products/catalog/storm_hat/STORM_CAPS-19.jpg",
            "/images/products/catalog/storm_hat/STORM_CAPS-22.jpg",
          ],
        },
      },
      {
        name: { en: "Black", pt: "Preto" },
        hex: "#000000",
        images: {
          main: "/images/products/catalog/STORM_CAPS-14.jpg",
          gallery: [
            "/images/products/catalog/storm_hat/STORM_CAPS-28.jpg",
            "/images/products/catalog/storm_hat/STORM_CAPS-31.jpg",
          ],
        },
      },
    ],
    categories: ["hats"],
  },
  {
    id: "5",
    slug: "Struggle-hoodie",
    name: "Struggle",
    description: {
      en: "<strong> Oversized Hoodie | 80% Cotton </strong> <p> <strong> 20% Recycled Polyester </strong> <p>Oversized hoodie sweatshirt with a relaxed fit. Features a cross-over neckline, 2x1 ribbed cuffs and hem with elastane, and a kangaroo pocket. Designed with prints on the front and back.",
      pt: "<strong>Sweatshirt com Capuz Oversized | 80% Algodão</strong> <p> 20% Poliéster Reciclado</strong> <p>Sweatshirt com capuz oversized de corte descontraído. Possui decote cruzado, punhos e bainha canelados 2x1 com elastano e bolso canguru. Estampas na frente e nas costas.</p>",
    },
    features: {
      en: [
        "320 g/m²",
        "80% Cotton",
        "20% Recycled Polyester",
        "Casual oversized cut",
        "Dropped shoulders",
      ],
      pt: [
        "320 g/m²",
        "80% algodão",
        "20% poliéster reciclado",
        "Estilo casual oversized",
        "Ombros descaídos",
      ],
    },
    catalogImage: "/images/products/catalog/hoodie_struggle/CAPA_BEGE.jpg",
    colorVariants: [
      {
        name: { en: "Bege", pt: "Beige" },
        hex: "#FEFAEF",
        images: {
          main: "/images/products/catalog/hoodie_struggle/CAPA_BEGE.jpg",
          gallery: [
            "/images/products/catalog/hoodie_struggle/STORM_STUDIO-109.1.jpg",
            "/images/products/catalog/hoodie_struggle/STORM_STUDIO-109.2.jpg",
            "/images/products/catalog/hoodie_struggle/STORM_STUDIO-109.3.jpg",
            "/images/products/catalog/hoodie_struggle/STORM_STUDIO-109.5.jpg",
          ],
        },
      },
    ],
    categories: ["store", "hoodies"],
  },
  {
    id: "6",
    slug: "Simple-hoodie",
    name: "Simple",
    description: {
      en: "<strong> Oversized Hoodie | 80% Cotton </strong> <p> <strong> 20% Recycled Polyester </strong> <p>Oversized hoodie sweatshirt with a relaxed fit. Features a cross-over neckline, 2x1 ribbed cuffs and hem with elastane, and a kangaroo pocket. Designed with a simple logo embroidered on the chest and an embroidered detail on the sleeve.",
      pt: "<strong>Sweatshirt com Capuz Oversized | 80% Algodão</strong> <p> 20% Poliéster Reciclado</strong> <p>Sweatshirt hoodie oversized com corte descontraído. Apresenta decote cruzado, punhos e bainha em canelado 2x1 com elastano, e bolso canguru. Design simples com logótipo bordado no peito e detalhe de raio bordado na manga.</p>",
    },
    features: {
      en: [
        "320 g/m²",
        "80% Cotton",
        "20% Recycled Polyester",
        "Casual oversized cut",
        "Dropped shoulders",
      ],
      pt: [
        "320 g/m²",
        "80% algodão",
        "20% poliéster reciclado",
        "Estilo casual oversized",
        "Ombros descaídos",
      ],
    },
    catalogImage: "/images/products/catalog/hoodie_simple/1_CAPA_BLACK.jpg",
    colorVariants: [
      {
        name: { en: "Black", pt: "Preto" },
        hex: "#000000",
        images: {
          main: "/images/products/catalog/hoodie_simple/1_CAPA_BLACK.jpg",
          gallery: [
            "/images/products/catalog/hoodie_simple/1_CAPA_BLACK.jpg",
            "/images/products/catalog/hoodie_simple/STORM_STUDIO-108.1.jpg",
            "/images/products/catalog/hoodie_simple/STORM_STUDIO-108.3.jpg",
            "/images/products/catalog/hoodie_simple/STORM_STUDIO-108.6.jpg",
          ],
        },
      },
    ],
    categories: ["store", "hoodies"],
  },
  // 👉 aqui entram os teus outros produtos exatamente como tens, só com pt/en
];

// FUNÇÃO PARA BUSCAR PRODUTO POR SLUG
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// FUNÇÃO PARA BUSCAR TODOS OS PRODUTOS
export function getAllProducts(): Product[] {
  return products;
}
