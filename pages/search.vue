<!-- eslint-disable no-console -->
<script lang="ts" setup>
const route = useRoute()
const searchProducts = useSearchProducts()

const LIMIT = 8

const { q } = route.query
if (q === '') {
  navigateTo('/')
}

const search = ref('')
const isMoreLoading = ref(false)

watch(
  () => route.query.q,
  (val) => {
    search.value = val as string
  },
  { immediate: true },
)

await searchProducts.fetchSearchProducts(search.value, LIMIT)

watch(
  () => search.value,
  async (val) => {
    await searchProducts.fetchSearchProducts(val, LIMIT)
  },
)

const hasMoreButton = computed(() => {
  return (
    searchProducts.searchProducts.products.length <
    searchProducts.searchProducts.total
  )
})

async function handleButtonMore() {
  const skipValue = searchProducts.searchProducts.skip + LIMIT
  isMoreLoading.value = true
  await searchProducts.fetchMoreSearchProducts(search.value, LIMIT, skipValue)
  isMoreLoading.value = false
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="product-search">
    <CHero>
      <template #title>{{ `Result for "${search}"` }}</template>
      <template #text>
        {{ `${searchProducts.searchProducts.total} products found` }}
      </template>
    </CHero>
    <ProductList
      :list-products="searchProducts.searchProducts.products"
      button-more-label="Load More"
      :is-loading-data="isMoreLoading"
      :is-button-more="hasMoreButton"
      @button-more="handleButtonMore"
    />
  </div>
</template>

<style lang="postcss" scoped>
.product-search {
  @apply w-full min-h-screen bg-white;
}
</style>
