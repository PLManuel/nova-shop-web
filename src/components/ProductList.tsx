import type { Product } from '../types/product'
import productsData from '../data/products.json'
import ProductCard from './ProductCard'

interface Props {
  onAddToCart: (product: Product) => void
}

function ProductList({ onAddToCart }: Props) {
  const products = productsData as Product[]

  return (
    <section id="catalog" className="py-12">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Equipamiento Destacado</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Catálogo de Productos</h2>
        </div>
        <p className="text-sm text-gray-500">
          Mostrando
          {' '}
          {products.length}
          {' '}
          productos con envío gratuito
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
