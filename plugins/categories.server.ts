import type { Categories } from '~/types/dummyjson'

/**
 * Trigger fetches the categories from the server and stores them in the store.
 */
export default defineNuxtPlugin(async () => {
  const categories = useCatgories()
  if (!categories.categories.length) {
    const data = await $fetch<Categories>('/api/categories')
    categories.categories = data
  }
})
