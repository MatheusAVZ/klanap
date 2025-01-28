import { type MetaFunction } from '@remix-run/node';
import { Button } from '~/components/button';
import { ImageCarousel } from '~/containers/carousel/image-carousel';
import { ProductCarousel } from '~/containers/carousel/product-carousel';
import { Header } from '~/containers/header';

export const meta: MetaFunction = () => {
  return [{ title: 'Klanap' }];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <ProductCarousel />
        </section>

        <section className="relative flex flex-1">
          <ImageCarousel />
          <div className="absolute left-0 right-0 top-0 flex h-1/2 w-full" />
          <div className="absolute bottom-0 left-0 right-0 flex h-1/2 flex-col items-center justify-end bg-gradient-to-t from-white to-transparent p-10">
            <p className="text-center text-xl">
              A Clanap Comércio Importação e Exportação, desde 1997 vem
              representando, exclusivamente em todo o Brasil, uma gama de
              produtos de ponta para a área da Construção Civil.
            </p>
            <p className="text-center text-xl">
              As inovações, são visíveis no resultado final dos produtos que
              oferece, fruto de uma busca incessante de novas marcas com
              qualidade, praticidade e elegância.
            </p>
            <div className="mt-8">
              <Button variant="primary" className="px-8 text-lg">
                QUEM SOMOS
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
