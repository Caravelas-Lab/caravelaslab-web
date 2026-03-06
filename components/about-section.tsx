"use client"

import { Layers, Cpu, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Impressao Camada por Camada",
    description:
      "Tecnologia FDM e SLA para diferentes niveis de detalhamento e resistencia, garantindo o melhor resultado para cada projeto.",
  },
  {
    icon: Cpu,
    title: "Precisao Digital",
    description:
      "Resolucao de ate 0.05mm em impressao SLA, perfeita para pecas que exigem detalhes minuciosos e acabamento profissional.",
  },
  {
    icon: Zap,
    title: "Producao Rapida",
    description:
      "Prototipagem e producao em pequena escala com prazos curtos. Do modelo digital a peca finalizada em horas.",
  },
  {
    icon: Shield,
    title: "Materiais de Qualidade",
    description:
      "Trabalhamos com PLA, ABS, PETG, Nylon, Resina UV e TPU. Cada material selecionado para atender necessidades especificas.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Por que nos escolher
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Tecnologia que da forma a imaginacao</span>
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Combinamos equipamentos de ultima geracao com atendimento
            personalizado para entregar pecas de alta qualidade.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-mono text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
