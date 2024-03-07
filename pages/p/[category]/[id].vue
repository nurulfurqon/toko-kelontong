<script lang="ts" setup>
import type { ProductItem } from '~/types/dummyjson'
const route = useRoute()

const { category, id } = route.params
const relatedProducts = useRelatedProducts()
const product = await $fetch<ProductItem>('/api/products/' + id)
if (!product) {
  navigateTo('/')
}

useHead({
  title: `${product.title} - Kelontong`,
  meta: [
    {
      name: 'description',
      content: product.description,
    },
    {
      property: 'og:title',
      content: `${product.title} - Kelontong`,
    },
    {
      property: 'og:description',
      content: product.description,
    },
    {
      property: 'og:image',
      content: product.images?.[0] ?? '',
    },
    {
      property: 'og:url',
      content: `https://toko-kelontong.fly.dev/p/${category}/${id}`,
    },
  ],
})

if (!relatedProducts.getRelatedProducts(category as string)) {
  await relatedProducts.fetchRelatedProducts(category as string)
}
</script>

<template>
  <div class="product-detail">
    <ProductDetailContent :product="product" />
    <HomeSectionCatalog
      title="You may also like this"
      subtitle="Related products"
      btn-more-label="View more"
      :btn-more-link="`/c/${category}`"
      :list-products="
        relatedProducts.getRelatedProducts(category as string)?.products
      "
    />
  </div>
</template>

<style lang="postcss" scoped>
.product-detail {
  @apply w-full min-h-screen bg-white divide-y;
}
</style>
