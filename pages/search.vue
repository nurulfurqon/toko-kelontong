<script lang="ts" setup>
const route = useRoute()
const searchStore = useSearch()

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

await searchStore.fetchSearchProducts(search.value, LIMIT)

watch(
  () => search.value,
  async (val) => {
    await searchStore.fetchSearchProducts(val, LIMIT)
  },
)

const hasMoreButton = computed(() => {
  return (
    searchStore.searchProducts.products.length <
    searchStore.searchProducts.total
  )
})

async function handleButtonMore() {
  const skipValue = searchStore.searchProducts.skip + LIMIT
  isMoreLoading.value = true
  await searchStore.fetchMoreSearchProducts(search.value, LIMIT, skipValue)
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
        {{ `${searchStore.searchProducts.total} products found` }}
      </template>
    </CHero>
    <ProductList
      :list-products="searchStore.searchProducts.products"
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
