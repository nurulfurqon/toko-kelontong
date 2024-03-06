import type { Categories } from '~/types/dummyjson'

interface CategoriesState {
  categories: Categories
}

export const useCatgories = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
  }),
})
