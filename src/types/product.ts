export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
  category: string
  rating: number
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
}
