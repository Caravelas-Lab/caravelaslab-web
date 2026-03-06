export interface Product {
  id: string
  code: string
  name: string
  category: string
  description: string
  details: string[]
  material: string
  dimensions: string
  image: string
  images: string[]
}

export const categories = ["Todos", "Chaveiros"] as const

export type Category = (typeof categories)[number]

export const products: Product[] = [
  {
    id: "chaveiro-enfermagem",
    code: "3D-CH-ENF-001",
    name: "Chaveiro Enfermagem",
    category: "Chaveiros",
    description:
      "Chaveiro temático de enfermagem, ideal para presentear profissionais da área ou usar no dia a dia com identidade e estilo.",
    details: [
      "Tema de enfermagem com acabamento detalhado",
      "Leve e resistente para uso diário",
      "Ótimo para bolsas, mochilas e chaveiros",
      "Pode ser produzido em cores variadas sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 5cm x 5cm",
    image:
      "/images/products/chaveiros/enfermagem/image_63bc6050-e74c-4c2e-90fa-93e91b07fc5c.png",
    images: [
      "/images/products/chaveiros/enfermagem/image_63bc6050-e74c-4c2e-90fa-93e91b07fc5c.png",
      "/images/products/chaveiros/enfermagem/image_d542afd1-431d-449d-9e5f-5b309b3ecf8f.png",
      "/images/products/chaveiros/enfermagem/image_ec778478-2623-4eca-b23e-12c38ec21d38.png",
      "/images/products/chaveiros/enfermagem/image_fd09989e-5a90-4915-a654-c4b3b167d1b2.png",
    ],
  },
  {
    id: "chaveiro-lacos",
    code: "3D-CH-LAC-002",
    name: "Chaveiro Laços",
    category: "Chaveiros",
    description:
      "Chaveiro modelo laço com visual delicado, perfeito para lembrancinhas, presentes personalizados e composição de kits.",
    details: [
      "Design de laço com bom nível de detalhe",
      "Acabamento limpo e pronto para uso",
      "Ideal para brindes e eventos",
      "Personalização de cor disponível sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 5cm x 4cm",
    image:
      "/images/products/chaveiros/la%C3%A7os/image_2765dd7c-82b0-46a0-a43d-b558c490e09d.png",
    images: [
      "/images/products/chaveiros/la%C3%A7os/image_2765dd7c-82b0-46a0-a43d-b558c490e09d.png",
      "/images/products/chaveiros/la%C3%A7os/image_8fa3a5b2-ffc3-4317-8126-03161bd7fba4.png",
      "/images/products/chaveiros/la%C3%A7os/image_b003c2dc-ee2a-4c62-83f3-32e9ca4821a6.png",
      "/images/products/chaveiros/la%C3%A7os/image_ceda5cfb-b71f-4270-8090-ceaab164b030.png",
      "/images/products/chaveiros/la%C3%A7os/ChatGPT%20Image%206%20de%20mar.%20de%202026%2C%2011_45_48.png",
    ],
  },
]
