import { useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { products } from '~/utils/constants';

export default function ProductsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const productName = location.hash.replace('#', ''); // Remove o #
      const productElement = document.getElementById(productName);
      if (productElement) {
        const offset = 96; // Distância de 96px do topo
        const elementPosition =
          productElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="px-[10%] py-24 md:px-[25%]">
        {products.map(({ description, image, id, name }, index) => (
          <div key={id} className="flex flex-col items-center" id={id}>
            <h2 className="font-normal text-[#252D4F] sm:text-lg md:text-2xl">
              {name}
            </h2>

            <img src={image} alt={name} className="my-10 w-1/2" />

            <div className="flex flex-col gap-8">
              {description.map(({ items, label }, id) => {
                const splitLabel = label.split('/n');
                return (
                  <div className="flex flex-col gap-4" key={id}>
                    <div>
                      {splitLabel.length > 1 ? (
                        splitLabel.map((text, index) => (
                          <h3
                            className="mb-2 font-normal text-[#252D4F] md:text-lg"
                            key={index}
                          >
                            {text}
                          </h3>
                        ))
                      ) : (
                        <h3 className="font-normal text-[#252D4F] md:text-lg">
                          {label}
                        </h3>
                      )}
                    </div>
                    <ul className="list-disc">
                      {items.map((application, index) => (
                        <li key={index} className="text-sm md:text-base">
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {index < products.length - 1 ? (
              <hr className="my-8 w-full border-dashed border-orange-500" />
            ) : null}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
