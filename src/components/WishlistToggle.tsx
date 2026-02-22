"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistToggleProps {
  productId: string;
}

export default function WishlistToggle({ productId }: WishlistToggleProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(productId);

  return (
    <button
      onClick={() => toggleWishlist(productId)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
        wishlisted
          ? "border-accent/50 text-accent bg-accent/10"
          : "border-border/50 text-neutral-400 hover:border-accent/30 hover:text-accent"
      }`}
    >
      <Heart
        className={`w-4 h-4 ${wishlisted ? "fill-accent" : ""}`}
      />
      {wishlisted ? "Saved" : "Save"}
    </button>
  );
}
