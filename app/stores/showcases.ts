import type {
  ProductItem,
  ProductsResponse,
  PostItem,
  PostsResponse,
} from '~/types/dummyjson'

interface ShowcaseState {
  topProducts: ProductItem[]
  mostBuyedProducts: ProductItem[]
  recomendedProducts: ProductItem[]
  latestPosts: PostItem[]
}

export const useShowcases = defineStore('showcases', {
  state: (): ShowcaseState => ({
    topProducts: [],
    mostBuyedProducts: [],
    recomendedProducts: [],
    latestPosts: [],
  }),
  actions: {
    async fetchTopProducts() {
      try {
        const data = await $fetch<ProductsResponse>(
          '/api/products/category/tops?limit=5&select=id,title,thumbnail,price,rating,category,discountPercentage',
        )
        if (data) {
          this.topProducts = data.products
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchMostBuyedProducts() {
      try {
        const data = await $fetch<ProductsResponse>(
          '/api/products/category/home-decoration?limit=4&select=id,title,thumbnail,price,rating,category,discountPercentage',
        )
        if (data) {
          this.mostBuyedProducts = data.products
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchRecomendedProducts() {
      try {
        const data = await $fetch<ProductsResponse>(
          '/api/products/category/skin-care?limit=4&select=id,title,thumbnail,price,rating,category,discountPercentage',
        )
        if (data) {
          this.recomendedProducts = data.products
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchLatestPosts() {
      try {
        const data = await $fetch<PostsResponse>(
          '/api/posts?limit=3&select=id,title,body,tags,reactions',
        )
        if (data) {
          this.latestPosts = data.posts
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
})
