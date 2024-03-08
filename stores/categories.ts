import type { CategoriesResponse, ProductsResponse } from '~/types/dummyjson'

interface CategoriesState {
  categories: CategoriesResponse
  categoryProducts: ProductsResponse
}

export const useCategories = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
    categoryProducts: {} as ProductsResponse,
  }),
  actions: {
    async fetchCategoryProducts(category: string, limit: number) {
      try {
        const data = await $fetch<ProductsResponse>(
          `/api/products/category/${category}?limit=${limit}&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (data) {
          this.categoryProducts = data
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    async fetchMoreCategoryProducts(
      category: string,
      limit: number,
      skip: number,
    ) {
      try {
        const data = await $fetch<ProductsResponse>(
          `/api/products/category/${category}?limit=${limit}&skip=${skip}&select=id,title,thumbnail,price,rating,category,discountPercentage`,
        )
        if (this.categoryProducts.products.length && data) {
          this.categoryProducts.products.push(...data.products)
          this.categoryProducts.total = data.total
          this.categoryProducts.limit = data.limit
          this.categoryProducts.skip = data.skip
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
})
