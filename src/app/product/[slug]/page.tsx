import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { products } from "@/data/products";
import { getProductBySlug, getRelatedProducts, formatPrice } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import WishlistToggle from "@/components/WishlistToggle";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | CURATED`,
    description: product.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 3);

  return (
    <div className="pt-16">
      {/* Back Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase tracking-wider text-xs">Back to all products</span>
        </Link>
      </div>

      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden bg-surface border border-border/50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Category & Wishlist */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-surface border border-border/50 rounded-full text-neutral-400">
                {product.category}
              </span>
              <WishlistToggle productId={product.id} />
            </div>

            {/* Name & Price */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-accent">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-neutral-300 leading-relaxed">
                {product.description}
              </p>
              <blockquote className="border-l-2 border-accent/50 pl-4 py-1">
                <p className="text-sm text-neutral-400 italic leading-relaxed">
                  {product.editorialNote}
                </p>
              </blockquote>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-500 bg-surface-light rounded-full border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Affiliate Buttons */}
            <div className="space-y-3 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
                Shop Now
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={product.affiliateLinks.lazada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="affiliate-btn affiliate-btn-lazada flex-1 justify-center"
                >
                  <span>Buy on Lazada</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={product.affiliateLinks.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="affiliate-btn affiliate-btn-shopee flex-1 justify-center"
                >
                  <span>Buy on Shopee</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-border/30">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">
                More in {product.category}
              </h2>
              <Link
                href={`/?category=${product.category}`}
                className="text-xs uppercase tracking-wider text-neutral-500 hover:text-accent transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
