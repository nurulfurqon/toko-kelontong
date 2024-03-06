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
