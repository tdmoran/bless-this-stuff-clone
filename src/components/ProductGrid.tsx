"use client";

import { useState, useMemo } from "react";
import { products, type Category, categoryDescriptions } from "@/data/products";
import { searchProducts, getProductsByCategory } from "@/lib/utils";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = searchQuery ? searchProducts(searchQuery) : products;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-6">
        <div className="max-w-md">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Category Description */}
      {activeCategory && (
        <p className="text-sm text-neutral-500 italic">
          {categoryDescriptions[activeCategory]}
        </p>
      )}

      {/* Results Count */}
      <p className="text-xs text-neutral-600 uppercase tracking-wider">
        {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        {activeCategory ? ` in ${activeCategory}` : ""}
        {searchQuery ? ` matching "${searchQuery}"` : ""}
      </p>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-neutral-500 text-lg mb-2">No products found</p>
          <p className="text-neutral-600 text-sm">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
