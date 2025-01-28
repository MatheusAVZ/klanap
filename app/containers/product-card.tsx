import { Button } from "~/components/button"
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string
  description: string
  image: string
}

export function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img src={image || "/placeholder.svg"} alt={title} className="object-contain" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-orange-500">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{scale: 1.07}}
        >
          <Button variant="text" className="w-full bg-orange-500 hover:bg-orange-600">
            SAIBA MAIS
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

