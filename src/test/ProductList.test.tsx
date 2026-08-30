import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ProductList from '../components/ProductList'
import productsData from '../data/products.json'

describe('productList', () => {
  it('renders all products from mock data', () => {
    render(<ProductList onAddToCart={vi.fn()} />)
    for (const product of productsData) {
      expect(screen.getByText(product.name)).toBeInTheDocument()
    }
  })

  it('renders an Add to Cart button for each product', () => {
    render(<ProductList onAddToCart={vi.fn()} />)
    const buttons = screen.getAllByRole('button', { name: /add to cart/i })
    expect(buttons).toHaveLength(productsData.length)
  })
})
