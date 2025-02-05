import { Link } from '@remix-run/react';
import { Button } from '~/components/button';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { cn } from '~/utils/cn';
import { homeImages } from '~/utils/constants';

export default function aboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex flex-col gap-4 py-24">
        <section className="flex flex-col gap-4 px-[10%] md:px-[15%]">
          <p className="text-justify font-normal text-[#252D4F] md:text-xl">
            A Klanap trabalha há quase 30 anos no mercado brasileiro de
            construção civil, industrializando e comercializando uma vasta gama
            de produtos para empresas e construtoras que desejam aliar qualidade
            de ponta em seus projetos à alta tecnologia dos cimentos especiais.
          </p>
          <p className="text-justify font-normal text-[#252D4F] md:text-xl">
            Atendemos clientes no ramo da construção civil em todo o Brasil,
            fornecendo cimentos especiais de maneira rápida e eficaz, entregando
            qualidade e preço justo.
          </p>
          <p className="text-justify font-normal text-[#252D4F] md:text-xl">
            As inovações e tecnologias empregadas em nossos cimentos especiais
            são claramente visíveis no resultado final dos projetos, com um
            leque de produtos que é fruto de uma busca incessante de novas
            marcas com qualidade e praticidade.{' '}
          </p>
          <p className="text-justify font-normal text-[#252D4F] md:text-xl">
            Trabalhamos desde 1997 proporcionando a nossos clientes o melhor
            custo-benefício do mercado da construção, oferecendo produtos como
            Cimento Branco Estrutural Royal 52.5N e 42.5N em sacaria e Big Bag,
            Sílica Ativa e Cimento Sulfoaluminoso.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-2">
          {homeImages.map((image, id) => (
            <img
              key={id}
              src={image}
              alt=""
              className={cn('w-full', id > 3 && 'hidden')}
            />
          ))}
        </section>

        <section className="flex flex-col items-center gap-4 px-[10%] md:px-[15%]">
          <p className="text-center font-normal text-[#252D4F] md:text-xl">
            Conheça nossa gama de produtos e se beneficie da qualidade e
            excelência dos cimentos Klanap.
          </p>

          <Link to="/produtos">
            <Button variant="primary">Ver Produtos</Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
