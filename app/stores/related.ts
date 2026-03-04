import type { ProductsResponse, ProductItem } from '~/types/dummyjson'

interface RelatedProductItems {
  category: string
  products: ProductItem[]
}

interface RelatedState {
  relatedProducts: RelatedProductItems[]
}

export const useRelated = defineStore('related', {
  state: (): RelatedState => ({
    relatedProducts: [],
  }),
  getters: {
    getRelatedProducts: (state) => (category: string) => {
      return state.relatedProducts.find((item) => item.category === category)
    },
  },
  actions: {
    async fetchRelatedProducts(name: string) {
      try {
        const data = await $fetch<ProductsResponse>(
          `/api/products/category/${name}?limit=4&skip=1&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (data) {
          this.relatedProducts.push({
            category: name,
            products: data.products,
          })
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
})
