export interface Image {
  png: string
  webp: string
}

export interface ItemLabel {
  name: string
  value: string
}

export interface ArticleItem {
  name?: string
  tag?: string
  text?: string
  image?: Image
  link?: string
}

export interface ProductItem {
  name?: string
  price?: string
  image?: Image
  link: string
  labelInfo?: ItemLabel
  labelSpec?: ItemLabel
  promoInfo?: string
}

export interface MenuItem {
  name: string
  link: string
}

export interface SocialMedia {
  icon: string
  link: string
}

export interface ProductCard {
  image?: string
  title?: string
  category?: string
  link?: string
  price?: string | number
  rating?: number | string
  isDiscount?: boolean
  discount?: number
  discountPrice?: number | string
  buttonLabel?: string
}

export interface ArticleCard {
  image?: string
  title?: string
  tags?: string[]
  link?: string
  description?: string
}
