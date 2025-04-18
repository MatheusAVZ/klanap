import { type MetaFunction, type LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { products } from '~/utils/constants';

export const meta: MetaFunction = () => {
  return [{ title: 'Klanap' }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const productId = params.productId;

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return redirect('/');
  }

  return {
    product,
  };
}

export default function ProductsPage() {
  const {
    product: { id, description, image, name },
  } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="px-[10%] py-24 pt-32 md:px-[25%]">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
