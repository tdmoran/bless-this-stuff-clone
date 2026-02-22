"use client";

import { categories, type Category } from "@/data/products";

interface CategoryFilterProps {
  active: Category | null;
  onChange: (category: Category | null) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
      <button
        onClick={() => onChange(null)}
        className={`category-chip whitespace-nowrap ${
          active === null ? "active" : "text-neutral-400"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`category-chip whitespace-nowrap ${
            active === cat ? "active" : "text-neutral-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
