interface Props {
  cartCount: number
  onOpenCart: () => void
}

function Navbar({ cartCount, onOpenCart }: Props) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-blue-600">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
              ⚡
            </span>
            <span>
              Nova
              <span className="text-gray-900">Shop</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            <a href="#hero" className="transition-colors hover:text-blue-600">Home</a>
            <a href="#catalog" className="transition-colors hover:text-blue-600">Catalog</a>
            <a href="#deals" className="flex items-center gap-1.5 transition-colors hover:text-blue-600">
              <span>Deals</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">Hot</span>
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="View Cart"
            className="group relative flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            <span className="text-lg">🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-110">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
