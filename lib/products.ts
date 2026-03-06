export interface Product {
  id: string
  name: string
  category: string
  description: string
  details: string[]
  material: string
  dimensions: string
  image: string
}

export const categories = [
  "Todos",
  "Decoracao",
  "Utilitarios",
  "Miniaturas",
  "Pecas Tecnicas",
] as const

export type Category = (typeof categories)[number]

export const products: Product[] = [
  {
    id: "vaso-geometrico",
    name: "Vaso Geometrico",
    category: "Decoracao",
    description:
      "Vaso com design low-poly facetado, perfeito para suculentas e plantas pequenas. Cada faceta cria um jogo de luz e sombra unico.",
    details: [
      "Design low-poly com facetas precisas",
      "Base com furo para drenagem",
      "Acabamento fosco premium",
      "Ideal para suculentas e cactos",
    ],
    material: "PLA Biodegradavel",
    dimensions: "12cm x 12cm x 15cm",
    image: "/images/products/vaso-geometrico.jpg",
  },
  {
    id: "luminaria",
    name: "Luminaria Treliça",
    category: "Decoracao",
    description:
      "Luminaria com padrao de treliça intrincado que projeta sombras geometricas fascinantes no ambiente. Compativel com lampadas E27.",
    details: [
      "Padrao de treliça com centenas de aberturas",
      "Projecao de sombras decorativas",
      "Encaixe para soquete E27",
      "Design moderno e minimalista",
    ],
    material: "PETG Translucido",
    dimensions: "20cm x 20cm x 25cm",
    image: "/images/products/luminaria.jpg",
  },
  {
    id: "suporte-celular",
    name: "Suporte para Celular",
    category: "Utilitarios",
    description:
      "Suporte ergonomico para celular com angulo otimizado para visualizacao. Design compacto e elegante para mesa de trabalho.",
    details: [
      "Angulo de 60 graus ideal para leitura",
      "Base antiderrapante",
      "Compativel com smartphones ate 6.7 polegadas",
      "Canal para cabo de carregamento",
    ],
    material: "PLA Premium",
    dimensions: "8cm x 10cm x 12cm",
    image: "/images/products/suporte-celular.jpg",
  },
  {
    id: "organizador",
    name: "Organizador Colmeia",
    category: "Utilitarios",
    description:
      "Organizador de mesa com padrao hexagonal tipo colmeia. Multiplos compartimentos para canetas, tesouras e materiais de escritorio.",
    details: [
      "Padrao hexagonal modular",
      "6 compartimentos de tamanhos variados",
      "Base estavel e resistente",
      "Empilhavel com outros modulos",
    ],
    material: "PLA Reciclado",
    dimensions: "18cm x 12cm x 10cm",
    image: "/images/products/organizador.jpg",
  },
  {
    id: "miniatura",
    name: "Miniatura Colecionavel",
    category: "Miniaturas",
    description:
      "Miniatura de alta definicao impressa em resina, com detalhes incriveis. Perfeita para colecao, RPG de mesa ou decoracao.",
    details: [
      "Impressao em resina de alta resolucao",
      "Detalhes em escala de 0.05mm",
      "Base incluida",
      "Disponivel pintada ou para pintar",
    ],
    material: "Resina UV Premium",
    dimensions: "3cm x 3cm x 7cm",
    image: "/images/products/miniatura.jpg",
  },
  {
    id: "engrenagem",
    name: "Kit Engrenagens",
    category: "Pecas Tecnicas",
    description:
      "Conjunto de engrenagens de precisao para projetos mecanicos e educacionais. Encaixes perfeitos e funcionamento suave.",
    details: [
      "Conjunto com 8 engrenagens diferentes",
      "Tolerancia de 0.1mm",
      "Dentes perfeitamente alinhados",
      "Ideal para projetos educacionais e prototipagem",
    ],
    material: "Nylon PA12",
    dimensions: "Variados (2cm a 8cm)",
    image: "/images/products/engrenagem.jpg",
  },
  {
    id: "caixa-personalizada",
    name: "Caixa com Tampa Deslizante",
    category: "Utilitarios",
    description:
      "Caixa de armazenamento com tampa deslizante e padrao geometrico gravado. Perfeita para guardar objetos pequenos com estilo.",
    details: [
      "Tampa com sistema deslizante suave",
      "Gravacao geometrica decorativa",
      "Interior liso para proteger objetos",
      "Disponivel em varios tamanhos",
    ],
    material: "PLA Premium",
    dimensions: "15cm x 10cm x 5cm",
    image: "/images/products/caixa-personalizada.jpg",
  },
  {
    id: "porta-chaves",
    name: "Porta-Chaves Montanha",
    category: "Decoracao",
    description:
      "Porta-chaves de parede com silhueta de montanhas. Design elegante que transforma a organizacao das chaves em uma peca decorativa.",
    details: [
      "Silhueta de montanhas detalhada",
      "4 ganchos para chaves",
      "Fixacao por parafusos ou fita dupla face",
      "Acabamento fosco premium",
    ],
    material: "PLA Biodegradavel",
    dimensions: "25cm x 3cm x 12cm",
    image: "/images/products/porta-chaves.jpg",
  },
]
