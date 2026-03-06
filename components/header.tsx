"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-store"

interface HeaderProps {
  onCartOpen: () => void
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "catalogo", label: "Catálogo" },
  { id: "orcamento", label: "Orçamento" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
]

export function Header({ onCartOpen, activeSection, onNavigate }: HeaderProps) {
  const { totalItems } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3"
          aria-label="Voltar ao início"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/images/logo.jpg"
              alt="Caravelas Lab logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg font-bold leading-tight text-foreground">
              Caravelas
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Lab
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={onCartOpen}
            aria-label={`Carrinho com ${totalItems} itens`}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center gap-3 px-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                    <Image
                      src="/images/logo.jpg"
                      alt="Caravelas Lab logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-mono text-lg font-bold text-foreground">
                    Caravelas Lab
                  </span>
                </div>
                <nav className="flex flex-col gap-1" aria-label="Menu mobile">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
