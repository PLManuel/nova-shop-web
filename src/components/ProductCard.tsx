import type { Product } from '../types/product'

interface Props {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-amber-500">
            <span className="flex items-center gap-1">
              ⭐
              {' '}
              {product.rating.toFixed(1)}
            </span>
            <span className="font-normal text-gray-400">
              {product.stock}
              {' '}
              disponibles
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
          <div>
            <span className="block text-xs font-medium uppercase text-gray-400">Precio</span>
            <span className="text-xl font-extrabold text-gray-900">
              $
              {product.price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
          >
            <span>Agregar</span>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
