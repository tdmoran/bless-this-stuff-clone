import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  const featuredCount = products.filter((p) => p.featured).length;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold slide-up">
              Premium Product Discovery
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] slide-up stagger-1">
              Stuff worth
              <br />
              <span className="text-gradient">owning.</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl slide-up stagger-2">
              {products.length} hand-picked products across gear, tech, style, and
              beyond. Every item curated for quality, design, and purpose.
            </p>
            <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-neutral-600 slide-up stagger-3">
              <span>{products.length} Products</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>{featuredCount} Featured</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>6 Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ProductGrid />
      </section>
    </div>
  );
}
