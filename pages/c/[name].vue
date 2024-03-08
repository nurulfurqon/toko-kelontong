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
      v-if="categoryStore.categoryProducts.products.length > 0"
      :list-products="categoryStore.categoryProducts.products"
      button-more-label="Load More"
      :is-button-more="hasMoreButton"
      :is-loading-data="isMoreLoading"
      @button-more="handleButtonMore"
    />
    <div v-else class="categories__not-found">
      <img src="/images/not-found.png" alt="Not Found" />
      <h3 class="categories__not-found-title">Oops! product isn't found</h3>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.categories {
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
