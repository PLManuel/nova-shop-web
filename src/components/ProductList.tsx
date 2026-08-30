import type { Product } from '../types/product'
import productsData from '../data/products.json'
import ProductCard from './ProductCard'

interface Props {
  onAddToCart: (product: Product) => void
}

function ProductList({ onAddToCart }: Props) {
  const products = productsData as Product[]

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Catalog</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
