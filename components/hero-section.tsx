"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-3d.jpg"
          alt="Impressora 3D em ação"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,220,220,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,220,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Impressão 3D de Alta Qualidade
          </span>
        </div>
        <h1 className="mb-6 font-mono text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Transformamos ideias em{" "}
            <span className="text-primary">objetos reais</span>
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Explore nosso catálogo de produtos impressos em 3D. Escolha seus
          favoritos e faça seu pedido diretamente pelo WhatsApp.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full px-8 text-base font-semibold sm:w-auto"
            onClick={() => onNavigate("catalogo")}
          >
            Ver Catálogo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full px-8 text-base sm:w-auto"
            onClick={() => onNavigate("orcamento")}
          >
            Orçamento Personalizado
          </Button>
        </div>
      </div>

      <button
        onClick={() => onNavigate("catalogo")}
        className="absolute bottom-8 z-10 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Rolar para o catálogo"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
