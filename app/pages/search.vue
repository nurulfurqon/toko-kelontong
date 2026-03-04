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
    window.scrollTo({
      top: 0,
    })
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
      v-if="searchStore.searchProducts.products.length > 0"
      :list-products="searchStore.searchProducts.products"
      button-more-label="Load More"
      :is-loading-data="isMoreLoading"
      :is-button-more="hasMoreButton"
      @button-more="handleButtonMore"
    />
    <div v-else class="product-search__not-found">
      <img src="/images/not-found.png" alt="Not Found" />
      <h3 class="product-search__not-found-title">Oops! product isn't found</h3>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.product-search {
  @apply w-full min-h-screen bg-white;

  &__not-found {
    @apply min-h-[50vh] flex flex-col items-center justify-center py-14 md:py-20;

    img {
      @apply w-36 h-36 md:w-44 md:h-44 object-cover;
    }

    &-title {
      @apply mt-4 text-lg font-semibold;
    }
  }
}
</style>
