<script lang="ts" setup>
import type { ProductItem } from '~/types/dummyjson'
const { convertToUSD, calculateTotalPrice, reformateSlug } = useHelper()
const props = withDefaults(
  defineProps<{
    isButtonMore?: boolean
    buttonMoreLabel?: string
    listProducts?: ProductItem[]
    isLoadingData?: boolean
  }>(),
  {
    buttonMoreLabel: '',
    listProducts: () => [],
  },
)

const emit = defineEmits<{
  (e: 'buttonMore'): void
}>()

function handleButtonMore() {
  emit('buttonMore')
}
</script>
<template>
  <section class="product-list">
    <div class="product-list__wrapper">
      <div class="product-list__body">
        <CCardProduct
          v-for="(product, i) in props.listProducts"
          :key="`product-${i}`"
          :image="product.thumbnail"
          :title="product.title"
          :rating="product.rating"
          :price="convertToUSD(product.price || 0)"
          :category="reformateSlug(product.category || '')"
          :link="`/p/${product.category}/${product.id}`"
          :discount="product.discountPercentage"
          :discount-price="
            convertToUSD(
              calculateTotalPrice(
                product.price || 0,
                product.discountPercentage || 0,
              ),
            )
          "
          is-discount
        />
      </div>
      <div class="product-list__box-button">
        <CButton
          v-if="props.isButtonMore"
          :loading="props.isLoadingData"
          variant="outline"
          @click="handleButtonMore"
        >
          {{ props.buttonMoreLabel }}
        </CButton>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.product-list {
  @apply w-full relative flex flex-col items-center py-[60px];

  &__wrapper {
    @apply w-full max-w-[1212px] px-4;
  }

  &__body {
    @apply w-full relative grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5;
  }

  &__box-button {
    @apply w-full flex items-center justify-center mt-10;
  }
}
</style>
