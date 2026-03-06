"use client"

import Image from "next/image"
import { Plus, Check, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addItem, isInCart } = useCart()
  const inCart = isInCart(product.id)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <button
        onClick={() => onViewDetails(product)}
        className="relative aspect-square w-full overflow-hidden"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all group-hover:bg-background/40 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium text-foreground">
            <Eye className="h-4 w-4" />
            Ver detalhes
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-3 md:p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </span>
        <h3 className="font-mono text-sm font-semibold leading-snug text-foreground md:text-base">
          {product.name}
        </h3>
        <p className="text-[11px] font-mono text-muted-foreground">
          Cód: {product.code}
        </p>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-auto pt-3">
          <Button
            size="sm"
            variant={inCart ? "secondary" : "default"}
            className="w-full text-xs"
            onClick={(e) => {
              e.stopPropagation()
              if (!inCart) addItem(product)
            }}
            disabled={inCart}
          >
            {inCart ? (
              <>
                <Check className="mr-1.5 h-3.5 w-3.5" />
                No carrinho
              </>
            ) : (
              <>
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Adicionar
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  )
}
