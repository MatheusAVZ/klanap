import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/button";
import { Header } from "~/containers/header";
import { EmblaCarousel } from "~/containers/image-carousel";

export const meta: MetaFunction = () => {
  return [
    { title: "Klanap" }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <EmblaCarousel/>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-justify">
              A Clanap Comércio Importação e Exportação, desde 1997 vem representando, exclusivamente em todo o Brasil,
              uma gama de produtos de ponta para a área da Construção Civil.
            </p>
            <p className="text-lg text-justify">
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
