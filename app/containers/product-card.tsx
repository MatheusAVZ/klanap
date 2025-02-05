import { useFetcher } from '@remix-run/react';
import { Button } from '~/components/button';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}

export function ProductCard({
  title,
  description,
  image,
  id,
}: ProductCardProps) {
  const { submit } = useFetcher({ key: 'navigate_to_product' });
  return (
    <div className="flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-lg bg-white p-6 shadow-lg">
      <h3 className="text-center text-lg font-semibold text-orange-500">
        {title}
      </h3>
      <img
        src={image || '/placeholder.svg'}
        alt={title}
        className="aspect-square h-64 object-contain"
      />
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <Button
        variant="primary"
        className="w-full"
        onClick={() => submit({ productId: id }, { method: 'post' })}
      >
        SAIBA MAIS
      </Button>
    </div>
  );
}
