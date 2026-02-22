"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div
      className={`product-card group fade-in stagger-${Math.min(index % 6 + 1, 6)}`}
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-300 ${
            wishlisted ? "fill-accent text-accent" : "text-white/70 hover:text-white"
          }`}
        />
      </button>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-neutral-300">
          {product.category}
        </span>
      </div>

      <Link href={`/product/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-light">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover product-image transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-white text-sm leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-500 line-clamp-2 mb-3 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-accent font-bold text-sm">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-600 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
