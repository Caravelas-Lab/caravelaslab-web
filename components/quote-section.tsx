"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const materials = [
  "PLA (Biodegradável)",
  "ABS (Alta Resistência)",
  "PETG (Flexível e Resistente)",
  "Resina UV (Alta Definição)",
  "Nylon (Industrial)",
  "TPU (Flexível/Borracha)",
  "Não tenho certeza",
]

const finishes = [
  "Fosco",
  "Brilhante",
  "Texturizado",
  "Lixado e Pintado",
  "Natural (sem acabamento)",
]

export function QuoteSection() {
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    material: "",
    finish: "",
    quantity: "",
    description: "",
    hasFile: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const message = `Olá! Gostaria de solicitar um orçamento personalizado:\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Tipo de projeto: ${formData.projectType}\n` +
      `Material desejado: ${formData.material}\n` +
      `Acabamento: ${formData.finish}\n` +
      `Quantidade: ${formData.quantity}\n` +
      `Descrição: ${formData.description}\n` +
      `Possui arquivo 3D: ${formData.hasFile ? "Sim" : "Não"}`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setSending(false)
    }, 500)
  }

  return (
    <section id="orcamento" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Sob Medida
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Orçamento Personalizado</span>
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Tem um projeto único em mente? Preencha o formulário abaixo com os
            detalhes e enviaremos seu orçamento pelo WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="quantity">Quantidade desejada</Label>
              <Input
                id="quantity"
                placeholder="Ex: 1, 10, 50..."
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="projectType">Tipo de projeto</Label>
            <Input
              id="projectType"
              placeholder="Ex: Protótipo, peça decorativa, peça funcional..."
              value={formData.projectType}
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Material preferido</Label>
              <Select
                value={formData.material}
                onValueChange={(val) =>
                  setFormData({ ...formData, material: val })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o material" />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Acabamento</Label>
              <Select
                value={formData.finish}
                onValueChange={(val) =>
                  setFormData({ ...formData, finish: val })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o acabamento" />
                </SelectTrigger>
                <SelectContent>
                  {finishes.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Descreva seu projeto</Label>
            <Textarea
              id="description"
              placeholder="Conte-nos sobre o que você precisa: dimensões aproximadas, funcionalidade, referência visual, prazo desejado..."
              rows={5}
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="hasFile"
              className="h-4 w-4 rounded border-border accent-primary"
              checked={formData.hasFile}
              onChange={(e) =>
                setFormData({ ...formData, hasFile: e.target.checked })
              }
            />
            <Label htmlFor="hasFile" className="text-sm font-normal">
              Já possuo arquivo 3D (STL, OBJ, 3MF, etc.)
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-base font-semibold"
            disabled={sending}
          >
            {sending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar orçamento pelo WhatsApp
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
