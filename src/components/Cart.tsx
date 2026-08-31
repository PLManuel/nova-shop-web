import type { CartItem } from '../types/product'

interface Props {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onClear: () => void
  onUpdateQuantity?: (productId: number, delta: number) => void
  onRemoveItem?: (productId: number) => void
}

function Cart({ isOpen, onClose, items, onClear, onUpdateQuantity, onRemoveItem }: Props) {
  if (!isOpen)
    return null

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )
  const shipping = subtotal > 0 ? 0 : 0
  const total = subtotal + shipping

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Carrito de compras">
      {/* Backdrop */}
      <div
        className="backdrop-blur-xs fixed inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <aside className="flex w-screen max-w-md flex-col justify-between bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <h2 className="text-xl font-bold text-gray-900">Tu Carrito</h2>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Cerrar carrito"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0
              ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
                      🛍️
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">Tu carrito está vacío.</p>
                      <p className="mt-1 text-sm text-gray-500">¡Explora nuestros productos y encuentra lo que necesitas!</p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Explorar Catálogo
                    </button>
                  </div>
                )
              : (
                  <ul className="divide-y divide-gray-100">
                    {items.map(item => (
                      <li key={item.product.id} className="flex items-center gap-4 py-4">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="h-16 w-16 rounded-xl border border-gray-100 object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-gray-900">{item.product.name}</h4>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {`S/. ${item.product.price.toFixed(2)} c/u`}
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            {onUpdateQuantity && (
                              <div className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(item.product.id, -1)}
                                  className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:text-black"
                                >
                                  -
                                </button>
                                <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(item.product.id, 1)}
                                  className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:text-black"
                                >
                                  +
                                </button>
                              </div>
                            )}
                            {!onUpdateQuantity && (
                              <span className="text-xs text-gray-400">
                                x
                                {item.quantity}
                              </span>
                            )}

                            {onRemoveItem && (
                              <button
                                type="button"
                                onClick={() => onRemoveItem(item.product.id)}
                                className="ml-auto text-xs text-red-500 hover:underline"
                              >
                                Eliminar
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="text-right text-sm font-bold text-gray-900">
                          {`S/. ${(item.product.price * item.quantity).toFixed(2)}`}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="space-y-4 border-t border-gray-100 bg-gray-50/50 p-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>
                    {`S/. ${subtotal.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span className="font-medium text-emerald-600">Gratis</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-extrabold text-gray-900">
                  <span>Total</span>
                  <span className="text-blue-600">
                    {`S/. ${total.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 active:scale-98"
                >
                  Continuar al Pago →
                </button>
                <button
                  type="button"
                  onClick={onClear}
                  className="w-full rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-red-600"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

export default Cart
