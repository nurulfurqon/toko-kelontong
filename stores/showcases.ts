/* eslint-disable no-console */
import type { ProductItem, ProductsResponse } from '~/types/dummyjson'

interface ShowcaseState {
  topProducts: ProductItem[]
  mostBuyedProducts: ProductItem[]
  recomendedProducts: ProductItem[]
}

export const useShowcases = defineStore('showcases', {
  state: (): ShowcaseState => ({
    topProducts: [],
    mostBuyedProducts: [],
    recomendedProducts: [],
  }),
  actions: {
    async fetchTopProducts() {
      try {
        const { data } = await useFetch<ProductsResponse>(
          '/api/products/category/tops?limit=5&select=id,title,thumbnail,price,rating,category,discountPercentage',
        )
        if (data.value) {
          this.topProducts = data.value?.products
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
})
