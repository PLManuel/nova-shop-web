import type { CartItem } from '../types/product'
import { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onSuccess: () => void
}

function CheckoutModal({ isOpen, onClose, items, onSuccess }: Props) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Manuel Dev',
    email: 'manuel@example.com',
    address: 'Av. Principal 123',
    cardNumber: '•••• •••• •••• 4242',
  })

  if (!isOpen)
    return null

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )
  const total = subtotal

  function handlePay(e: React.FormEvent) {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      onSuccess()
    }, 1800)
  }

  function handleFinish() {
    setIsSuccess(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Simulación de Pago">
      {/* Backdrop */}
      <div
        className="backdrop-blur-xs fixed inset-0 bg-black/60 transition-opacity"
        onClick={isProcessing ? undefined : onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">💳</span>
            <h3 className="text-lg font-bold text-gray-900">
              {isSuccess ? '¡Pago Exitoso!' : 'Finalizar Compra (Simulación)'}
            </h3>
          </div>
          {!isProcessing && (
            <button
              type="button"
              onClick={isSuccess ? handleFinish : onClose}
              className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess
            ? (
                <div className="flex flex-col items-center py-6 text-center space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl text-emerald-600 animate-bounce">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-gray-900">¡Gracias por tu compra!</h4>
                    <p className="mt-2 text-sm text-gray-500 max-w-sm">
                      Tu pedido ha sido procesado correctamente en modo de demostración. Hemos enviado el recibo virtual a tu correo.
                    </p>
                  </div>

                  <div className="w-full rounded-2xl bg-gray-50 p-4 text-left text-xs space-y-2 border border-gray-100">
                    <div className="flex justify-between text-gray-500">
                      <span>N° de Orden:</span>
                      <span className="font-mono font-semibold text-gray-800">#NOV-89423</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Total Pagado:</span>
                      <span className="font-bold text-blue-600 text-sm">
                        S/.
                        {' '}
                        {total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Entrega estimada:</span>
                      <span className="text-gray-800">2 a 3 días hábiles</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleFinish}
                    className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
                  >
                    Listo, Volver a la Tienda
                  </button>
                </div>
              )
            : (
                <form onSubmit={handlePay} className="space-y-4">
                  {/* Resumen express */}
                  <div className="rounded-2xl bg-blue-50/60 p-4 border border-blue-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-blue-700 font-semibold block">Total a pagar</span>
                      <span className="text-2xl font-extrabold text-blue-900">
                        S/.
                        {' '}
                        {total.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-white px-2.5 py-1 rounded-full border border-blue-200">
                      {items.reduce((s, i) => s + i.quantity, 0)}
                      {' '}
                      artículos
                    </span>
                  </div>

                  {/* Campos simulados */}
                  <div className="space-y-3 text-left text-sm">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre Completo</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Correo Electrónico</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Dirección de Entrega</label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={e => setFormData({ ...formData, address: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Tarjeta (Simulada)</label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center">
                    🔒 Simulación de entorno seguro. No se realizarán cargos reales.
                  </p>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 active:scale-98 disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isProcessing
                      ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Procesando pago seguro...</span>
                          </>
                        )
                      : (
                          <span>
                            Pagar S/.
                            {' '}
                            {total.toFixed(2)}
                            {' '}
                            →
                          </span>
                        )}
                  </button>
                </form>
              )}
        </div>
      </div>
    </div>
  )
}

export default CheckoutModal
