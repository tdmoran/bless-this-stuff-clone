import Link from "next/link";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-[0.3em] text-white">
              CURATED
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Hand-picked products for the discerning individual. Every item is
              selected for quality, design, and purpose.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Categories
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/?category=${cat}`}
                  className="text-sm text-neutral-500 hover:text-accent transition-colors duration-300"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Disclosure
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              This site contains affiliate links to Lazada and Shopee. We may
              earn a commission on purchases made through these links at no
              extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} CURATED. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Built with intent. Curated with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
