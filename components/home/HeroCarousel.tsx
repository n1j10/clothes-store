import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchFeaturedProducts } from "@/utils/api";

// Editorial mosaic of featured products: one tall image beside two stacked ones.
async function HeroCarousel() {
  const [main, ...rest] = await fetchFeaturedProducts();
  if (!main) return null;
  const side = rest.slice(0, 2);

  return (
    <div className="grid grid-cols-5 gap-3 h-[440px] sm:h-[560px]">
      <HeroTile product={main} className="col-span-3" priority />
      <div className="col-span-2 grid grid-rows-2 gap-3">
        {side.map((product) => (
          <HeroTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function HeroTile({ product, className = "", priority = false }: {
  product: { id: string; name: string; image: string };
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href={`/products/${product.id}`} className={`group relative overflow-hidden bg-muted ${className}`}>
      <Image
        src={product.image}
        alt={product.name}
        fill
        priority={priority}
        sizes="(max-width:1024px) 60vw, 35vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute bottom-0 left-0 bg-background px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em]">
        {product.name}
      </span>
    </Link>
  );
}

export default HeroCarousel;
