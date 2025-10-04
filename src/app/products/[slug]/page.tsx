// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailPage from "./ProductDetailPage";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// 👇 Gerar páginas estáticas para todos os produtos
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// 👇 Metadata dinâmica
export function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found - STORM",
    };
  }

  return {
    title: `${product.name} - STORM`,
    description: product.description,
  };
}

// 👇 Componente da página
export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  // Se o produto não existir, mostra 404
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
