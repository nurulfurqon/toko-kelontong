export default defineEventHandler(async (event) => {
  const apiUrl = useRuntimeConfig().apiUrl
  const { q, limit, skip, select } = getQuery(event)
  const queryParams = new URLSearchParams()
  if (limit) queryParams.append('limit', limit.toString())
  if (skip) queryParams.append('skip', skip.toString())
  if (select) queryParams.append('select', select.toString())
  try {
    const response = await $fetch(
      `${apiUrl}/products/search?q=${q}&${queryParams.toString()}`,
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
