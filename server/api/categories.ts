import type { Categories } from '~/types/dummyjson'
export default defineEventHandler(async () => {
  try {
    const response = await $fetch<Categories>(
      'https://dummyjson.com/products/categories',
    )
    return response
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusMessage: error.message,
        statusCode: 500,
      })
    }
  }
})
