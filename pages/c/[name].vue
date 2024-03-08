<script lang="ts" setup>
const route = useRoute()
const categoryStore = useCategories()

const { name } = route.params
const { reformateSlug } = useHelper()
const LIMIT = 8

const isMoreLoading = ref(false)

await categoryStore.fetchCategoryProducts(name as string, LIMIT)

const hasMoreButton = computed(() => {
  return (
    categoryStore.categoryProducts.products.length <
    categoryStore.categoryProducts.total
  )
})

async function handleButtonMore() {
  const skipValue = categoryStore.categoryProducts.skip + LIMIT
  isMoreLoading.value = true
  await categoryStore.fetchMoreCategoryProducts(
    name as string,
    LIMIT,
    skipValue,
  )
  isMoreLoading.value = false
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="categories">
    <CHero class="capitalize">
      <template #title>{{ reformateSlug(name as string) }}</template>
    </CHero>
    <ProductList
      :list-products="categoryStore.categoryProducts.products"
      button-more-label="Load More"
      :is-button-more="hasMoreButton"
      :is-loading-data="isMoreLoading"
      @button-more="handleButtonMore"
    />
  </div>
</template>

<style lang="postcss" scoped>
.categories {
  @apply w-full min-h-screen bg-white;
}
</style>
