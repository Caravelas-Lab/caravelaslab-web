export interface Product {
  id: string
  code: string
  name: string
  category: string
  tags: string[]
  description: string
  details: string[]
  material: string
  dimensions: string
  image: string
  images: string[]
}

export const categories = [
  "Todos",
  "Chaveiros",
  "Lembrancinhas",
  "Luminárias",
]

export type Category = (typeof categories)[number]

export const products: Product[] = [
  {
    id: "chaveiro-enfermagem",
    code: "3D-CH-ENF-001",
    name: "Chaveiro Enfermagem",
    category: "Chaveiros",
    tags: ["chaveiro", "enfermagem", "saude"],
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
    tags: ["chaveiro", "lacos", "lembrancinha", "presente"],
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
  {
    id: "lembrancinha-flores",
    code: "3D-LEM-FLO-003",
    name: "Lembrancinha Rosa Personalizada",
    category: "Lembrancinhas",
    tags: ["lembrancinha", "flores", "rosa", "personalizada", "evento"],
    description:
      "Lembrancinha em formato de rosa com base personalizada, ideal para aniversários, bodas e eventos especiais com um toque delicado e exclusivo.",
    details: [
      "Flor 3D com acabamento fino e visual elegante",
      "Base com personalização de nomes, idade ou data",
      "Excelente para mesas, lembranças de festa e brindes",
      "Produção em cores variadas sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 10cm x 4cm",
    image:
      "/images/products/lembrancinhas/flores/WhatsApp%20Image%202026-03-06%20at%2016.58.30.jpeg",
    images: [
      "/images/products/lembrancinhas/flores/WhatsApp%20Image%202026-03-06%20at%2016.58.30.jpeg",
    ],
  },
  {
    id: "luminaria-coelho-led",
    code: "3D-LUM-COE-004",
    name: "Luminária Coelho LED",
    category: "Luminárias",
    tags: ["luminaria", "coelho", "led", "decoracao"],
    description:
      "Luminária decorativa em formato de coelho com LED interno, ideal para criar um ambiente aconchegante em quartos, salas e espaços infantis.",
    details: [
      "Design de coelho vazado com efeito de luz marcante",
      "Iluminação interna com LED",
      "Peça decorativa para quartos, mesas e nichos",
      "Disponível em diferentes cores sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 15cm x 10cm",
    image:
      "/images/products/luminarias/ChatGPT%20Image%209%20de%20mar.%20de%202026%2C%2015_19_14.png",
    images: [
      "/images/products/luminarias/ChatGPT%20Image%209%20de%20mar.%20de%202026%2C%2015_19_14.png",
      "/images/products/luminarias/ChatGPT%20Image%209%20de%20mar.%20de%202026%2C%2015_20_47.png",
    ],
  },
  {
    id: "lembrancinha-formatura-medicina",
    code: "3D-LEM-FOR-005",
    name: "Lembrancinha Formatura Medicina",
    category: "Lembrancinhas",
    tags: ["lembrancinha", "formatura", "medicina", "evento", "personalizada"],
    description:
      "Lembrancinha de formatura com tema de medicina, ideal para celebrar a conclusão do curso com uma peça personalizada e marcante.",
    details: [
      "Tema de formatura em medicina com visual exclusivo",
      "Ideal para brindes de turma, convidados e comemorações",
      "Acabamento leve e resistente para lembrança duradoura",
      "Pode ser personalizado em cores e detalhes sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 8cm x 5cm",
    image:
      "/images/products/lembrancinhas/formatura-medicina-01/image_23f3b684-45b6-4303-88da-0a9007cebf3f.png",
    images: [
      "/images/products/lembrancinhas/formatura-medicina-01/image_23f3b684-45b6-4303-88da-0a9007cebf3f.png",
      "/images/products/lembrancinhas/formatura-medicina-01/image_43b73792-3c05-42d4-9733-b8ebc54ed16d.png",
      "/images/products/lembrancinhas/formatura-medicina-01/image_8e346187-a9ae-40f1-b66b-62992e57a915.png",
    ],
  },
  {
    id: "chaveiro-fuji-instax-mini",
    code: "3D-CH-FUJ-006",
    name: "Chaveiro Fuji Instax Mini",
    category: "Chaveiros",
    tags: ["chaveiro", "fuji", "instax", "mini", "camera", "presente"],
    description:
      "Chaveiro inspirado na Fuji Instax Mini, perfeito para quem gosta de fotografia, papelaria criativa e acessórios personalizados.",
    details: [
      "Modelo inspirado em câmera instantânea com acabamento detalhado",
      "Peça leve e resistente para uso no dia a dia",
      "Ideal para presentear amantes de fotografia e itens criativos",
      "Disponível em variações de cor sob consulta",
    ],
    material: "PLA Premium",
    dimensions: "Aproximadamente 5cm x 4cm",
    image:
      "/images/products/chaveiros/Fuji-instax-mini/image_c4eb69c1-bdeb-4c47-9c0b-597c2838187a.png",
    images: [
      "/images/products/chaveiros/Fuji-instax-mini/image_c4eb69c1-bdeb-4c47-9c0b-597c2838187a.png",
      "/images/products/chaveiros/Fuji-instax-mini/image_dba18f5e-845b-41e5-8129-792b3a25a33e.png",
    ],
  },
]
