import type { CategoriesResponse } from '~/types/dummyjson'

interface CategoriesState {
  categories: CategoriesResponse
}

export const useCatgories = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
  }),
})
