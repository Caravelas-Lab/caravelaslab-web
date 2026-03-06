"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { products, categories, type Category } from "@/lib/products"
import type { Product } from "@/lib/products"

interface CatalogSectionProps {
  onViewDetails: (product: Product) => void
}

export function CatalogSection({ onViewDetails }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todos" || product.category === activeCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="catalogo" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Nossos Produtos
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Catalogo de Impressao 3D</span>
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Explore nossa colecao de produtos impressos em 3D. Cada peca e
            fabricada com precisao e materiais de alta qualidade.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Buscar produtos"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Filtrar por categoria">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="text-lg font-medium text-foreground">
              Nenhum produto encontrado
            </p>
            <p className="text-sm text-muted-foreground">
              Tente uma busca diferente ou selecione outra categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
