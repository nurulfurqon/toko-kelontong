export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const apiUrl = useRuntimeConfig().apiUrl
  try {
    const response = await $fetch(`${apiUrl}/posts/${id}`)
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
