interface DummyCategory {
  slug: string
  name: string
  url: string
}

export default defineEventHandler(async () => {
  const apiUrl = useRuntimeConfig().apiUrl
  try {
    const response = await $fetch<DummyCategory[]>(
      `${apiUrl}/products/categories`,
    )
    return response.map((cat) => cat.slug)
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusMessage: error.message,
        statusCode: 500,
      })
    }
  }
})
