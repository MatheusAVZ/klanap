import { Button } from '~/components/button';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

export function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-64">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-orange-500">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Button variant="primary" className="w-full">
          SAIBA MAIS
        </Button>
      </div>
    </div>
  );
}
