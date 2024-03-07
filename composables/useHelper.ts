export const useHelper = () => {
  const reformateSlug = (slug: string) => {
    return slug.replace(/-/g, ' ')
  }

  const convertToUSD = (number: number): string => {
    /**
     * Convert a number to USD currency format.
     *
     * @param number The number to be converted.
     * @returns The number converted to USD currency format.
     */
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  const calculateTotalPrice = (
    originalPrice: number,
    discountPercentage: number,
  ): number => {
    if (
      originalPrice <= 0 ||
      discountPercentage < 0 ||
      discountPercentage > 100
    ) {
      throw new Error(
        'Invalid input. Original price must be greater than 0 and discount percentage must be between 0 and 100.',
      )
    }

    const discountAmount = (originalPrice * discountPercentage) / 100
    const totalPrice = originalPrice - discountAmount
    return totalPrice
  }

  return {
    reformateSlug,
    convertToUSD,
    calculateTotalPrice,
  }
}
