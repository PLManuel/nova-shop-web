import type { CartItem, Product } from './types/product'
import { useState } from 'react'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">NovaShop</h1>
          <span className="text-sm text-gray-500">
            {totalItems}
            {' '}
            {totalItems === 1 ? 'item' : 'items'}
            {' '}
            in cart
          </span>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:flex-row">
        <div className="flex-1">
          <ProductList onAddToCart={addToCart} />
        </div>
        <div className="w-full lg:w-80 lg:shrink-0">
          <Cart items={cartItems} onClear={clearCart} />
        </div>
      </main>
    </div>
  )
}

export default App
