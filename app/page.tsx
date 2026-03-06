"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CatalogSection } from "@/components/catalog-section"
import { QuoteSection } from "@/components/quote-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import type { Product } from "@/lib/products"

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeSection, setActiveSection] = useState("hero")

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (section === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const handleViewDetails = useCallback((product: Product) => {
    setSelectedProduct(product)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header
        onCartOpen={() => setCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <div id="hero">
          <HeroSection onNavigate={handleNavigate} />
        </div>
        <CatalogSection onViewDetails={handleViewDetails} />
        <AboutSection />
        <QuoteSection />
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <WhatsAppFab />
    </div>
  )
}
