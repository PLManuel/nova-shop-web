import type { CartItem, Product } from './types/product'
import { useState } from 'react'
import Cart from './components/Cart'
import CheckoutModal from './components/CheckoutModal'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  function showToast(msg: string) {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 2500)
  }

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
    showToast(`¡Se agregó "${product.name}" al carrito!`)
  }

  function updateQuantity(productId: number, delta: number) {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    })
  }

  function removeItem(productId: number) {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  function clearCart() {
    setCartItems([])
  }

  function handleStartCheckout() {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  function handleCheckoutSuccess() {
    setCartItems([])
    showToast('¡Compra completada con éxito!')
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Barra de navegación */}
      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />

      {/* Sección Hero */}
      <Hero />

      {/* Contenido Principal */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductList onAddToCart={addToCart} />
      </main>

      {/* Pie de página */}
      <footer className="mt-20 border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4">
          <p>© 2026 NovaShop. Demostración de E-commerce con CI/CD automatizado.</p>
        </div>
      </footer>

      {/* Carrito Lateral */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onClear={clearCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleStartCheckout}
      />

      {/* Modal de Pago Simulado */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Notificación Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex animate-bounce items-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-2xl transition-all">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}

export default App
