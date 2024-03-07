export type CategoriesResponse = string[]

export interface ProductItem {
  id: number
  title?: string
  description?: string
  price?: number
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[]
}

export interface ProductsResponse {
  products: ProductItem[]
  total: number
  skip: number
  limit: number
}

export interface PostItem {
  id: number
  title?: string
  body?: string
  userId?: number
  tags?: string[]
  reactions?: number
}

export interface PostsResponse {
  posts: PostItem[]
  total: number
  skip: number
  limit: number
}
