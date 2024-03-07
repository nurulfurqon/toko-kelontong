export default defineEventHandler(async () => {
  const apiUrl = useRuntimeConfig().apiUrl
  try {
    const response = await $fetch(`${apiUrl}/products/categories`)
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
