import type { CartItem } from '../types/product'

interface Props {
  items: CartItem[]
  onClear: () => void
}

function Cart({ items, onClear }: Props) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  return (
    <aside className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Cart</h2>

      {items.length === 0
        ? (
            <p className="text-sm text-gray-400">Your cart is empty.</p>
          )
        : (
            <>
              <ul className="flex flex-col divide-y divide-gray-100">
                {items.map(item => (
                  <li
                    key={item.product.id}
                    className="flex justify-between py-3 text-sm first:pt-0 last:pb-0"
                  >
                    <span className="text-gray-700">
                      {item.product.name}
                      <span className="ml-1 text-gray-400">
                        x
                        {item.quantity}
                      </span>
                    </span>
                    <span className="font-medium text-gray-800">
                      $
                      {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between border-t border-gray-200 pt-4 font-bold">
                <span>Total</span>
                <span className="text-blue-600">
                  $
                  {total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={onClear}
                className="w-full rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
              >
                Clear Cart
              </button>
            </>
          )}
    </aside>
  )
}

export default Cart
