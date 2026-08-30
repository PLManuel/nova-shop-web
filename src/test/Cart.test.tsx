import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Cart from '../components/Cart'

describe('cart', () => {
  it('renders empty state when no items are passed', () => {
    render(<Cart items={[]} onClear={vi.fn()} />)
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('displays item names, total and clear button when items are present', () => {
    const items = [
      {
        product: { id: 1, name: 'Test Laptop', price: 999.99, imageUrl: '', description: '' },
        quantity: 2,
      },
    ]
    render(<Cart items={items} onClear={vi.fn()} />)
    expect(screen.getByText('Test Laptop')).toBeInTheDocument()
    expect(screen.getAllByText('$1999.98')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /clear cart/i })).toBeInTheDocument()
  })
})
