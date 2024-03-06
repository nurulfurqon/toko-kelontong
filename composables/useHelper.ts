export const useHelper = () => {
  const reformateSlug = (slug: string) => {
    return slug.replace(/-/g, ' ')
  }

  return {
    reformateSlug,
  }
}
