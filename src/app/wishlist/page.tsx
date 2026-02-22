"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const wishlistProducts = useMemo(
    () => products.filter((p) => wishlist.includes(p.id)),
    [wishlist]
  );

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase tracking-wider text-xs">Back to all products</span>
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Your Wishlist
            </h1>
            <p className="text-sm text-neutral-500">
              {wishlistProducts.length} saved item{wishlistProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
          {wishlistProducts.length > 0 && (
            <button
              onClick={() => wishlistProducts.forEach((p) => removeFromWishlist(p.id))}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider text-neutral-500 hover:text-red-400 border border-border/50 hover:border-red-400/30 rounded-lg transition-all duration-300"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All
            </button>
          )}
        </div>

        {/* Products or Empty State */}
        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface border border-border/50">
              <Heart className="w-8 h-8 text-neutral-600" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-neutral-400">
                Nothing saved yet
              </p>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Browse our curated collection and tap the heart icon on products
                you love. They&apos;ll appear here for easy access.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
