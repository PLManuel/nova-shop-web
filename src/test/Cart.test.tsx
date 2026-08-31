import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Cart from '../components/Cart'

describe('cart', () => {
  it('renders empty state when no items are passed', () => {
    render(<Cart isOpen={true} onClose={vi.fn()} items={[]} onClear={vi.fn()} />)
    expect(screen.getByText('Tu carrito está vacío.')).toBeInTheDocument()
  })

  it('displays item names, total and clear button when items are present', () => {
    const items = [
      {
        product: {
          id: 1,
          name: 'Laptop de Prueba',
          price: 999.99,
          imageUrl: 'https://images.unsplash.com/photo-test',
          description: '',
          category: 'Laptops',
          rating: 4.8,
          stock: 10,
        },
        quantity: 2,
      },
    ]
    render(<Cart isOpen={true} onClose={vi.fn()} items={items} onClear={vi.fn()} />)
    expect(screen.getByText('Laptop de Prueba')).toBeInTheDocument()
    // $1999.98 appears in item subtotal, cart subtotal, and cart total
    expect(screen.getAllByText('$1999.98')).toHaveLength(3)
    expect(screen.getByRole('button', { name: /vaciar carrito/i })).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(<Cart isOpen={false} onClose={vi.fn()} items={[]} onClear={vi.fn()} />)
    expect(screen.queryByText('Tu Carrito')).not.toBeInTheDocument()
  })
})
