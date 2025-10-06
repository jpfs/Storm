import { notFound } from "next/navigation";
import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found - STORM" };

  return {
    title: `${product.name} - STORM`,
    description: product.description.en,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
