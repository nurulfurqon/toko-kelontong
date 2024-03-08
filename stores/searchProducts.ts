import type { ProductsResponse } from '~/types/dummyjson'

interface SearchProductsState {
  searchProducts: ProductsResponse
}

export const useSearchProducts = defineStore('searchProducts', {
  state: (): SearchProductsState => ({
    searchProducts: {} as ProductsResponse,
  }),
  actions: {
    async fetchSearchProducts(query: string, limit: number) {
      try {
        const data = await $fetch<ProductsResponse>(
          `/api/products/search?q=${query}&limit=${limit}&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (data) {
          this.searchProducts = data
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    async fetchMoreSearchProducts(query: string, limit: number, skip: number) {
      try {
        const data = await $fetch<ProductsResponse>(
          `/api/products/search?q=${query}&limit=${limit}&skip=${skip}&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (this.searchProducts.products.length && data) {
          this.searchProducts.products.push(...data.products)
          this.searchProducts.total = data.total
          this.searchProducts.limit = data.limit
          this.searchProducts.skip = data.skip
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
})
