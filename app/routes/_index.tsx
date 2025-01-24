import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/button";
import { Header } from "~/containers/header";
import { ImageCarousel } from "~/containers/image-carousel";
import { ProductCard } from "~/containers/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Klanap" }
  ];
};

const products = [
  {
    title: "CIMENTO BRANCO ESTRUTURAL ROYAL CEM I",
    description:
      "A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "CIMENTO BRANCO ESTRUTURAL RAK CEM I",
    description:
      "Mais um produto comercializado pela Klanap para trazer o melhor da tecnologia aliada à área de construção civil. O Cimento Branco RAK é produzido nos Emirados Árabes Unidos, é recomendado por sua beleza, brancura e qualidade impecáveis, além de uma secagem mais rápida.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "CIMENTO BRANCO ESTRUTURAL ROYAL CEM II",
    description:
      "A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "MICROSILEX",
    description:
      "Microsilica é um produto desenvolvido à base de sílica natural para melhorar o desempenho de concretos e argamassas, devido às suas propriedades pozolânicas.",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <ImageCarousel />

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-12">Produtos, algo assim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Apresentação <span className="underline decoration-red-500">Klanap</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg">
              A Clanap Comércio Importação e Exportação, desde 1997 vem representando, exclusivamente em todo o Brasil,
              uma gama de produtos de ponta para a área da Construção Civil.
            </p>
            <p className="text-lg">
              As inovações, são visíveis no resultado final dos produtos que oferece, fruto de uma busca incessante de
              novas marcas com qualidade, praticidade e elegância.
            </p>
            <div className="mt-8">
              <Button variant="primary" className="text-lg px-8">
                QUEM SOMOS
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
