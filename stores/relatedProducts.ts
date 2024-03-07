import type { ProductsResponse, ProductItem } from '~/types/dummyjson'

interface RelatedProductItems {
  category: string
  products: ProductItem[]
}

interface RelatedProductsState {
  relatedProducts: RelatedProductItems[]
}

export const useRelatedProducts = defineStore('relatedProducts', {
  state: (): RelatedProductsState => ({
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
        const { data } = await useFetch<ProductsResponse>(
          `/api/products/category/${name}?limit=4&skip=1&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (data.value) {
          this.relatedProducts.push({
            category: name,
            products: data.value?.products,
          })
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
})
