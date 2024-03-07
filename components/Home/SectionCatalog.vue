<script lang="ts" setup>
import type { ProductItem } from '~/types/dummyjson'
const { convertToUSD, calculateTotalPrice, reformateSlug } = useHelper()
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    btnMoreLabel?: string
    btnMoreLink?: string
    listProducts?: ProductItem[]
  }>(),
  {
    title: '',
    subtitle: '',
    btnMoreLabel: '',
    btnMoreLink: '',
    listProducts: () => [],
  },
)
</script>

<template>
  <section class="home-catalog">
    <div class="home-catalog__wrapper">
      <div class="home-catalog__header">
        <div>
          <p class="home-catalog__header-subtitle">{{ props.subtitle }}</p>
          <h2 class="home-catalog__header-title">{{ props.title }}</h2>
        </div>
        <CButton
          :to="props.btnMoreLink"
          variant="outline"
          class="home-catalog__button-more"
        >
          {{ props.btnMoreLabel }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M8.333 6.667L11.667 10l-3.333 3.333"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CButton>
        <NuxtLink
          :to="props.btnMoreLink"
          class="home-catalog__button-more-mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M8.333 6.667L11.667 10l-3.333 3.333"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="home-catalog__body">
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
          button-label="View Product"
        />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" setup>
.home-catalog {
  @apply w-full relative flex flex-col items-center py-[60px];

  &__wrapper {
    @apply w-full max-w-[1212px] px-4;
  }

  &__header {
    @apply w-full flex items-center md:items-end justify-between mb-5 md:mb-7;

    &-subtitle {
      @apply text-sm md:text-xl font-medium text-gray-700;
    }

    &-title {
      @apply text-xl md:text-3xl font-bold text-gray-800;
    }
  }

  &__button-more {
    @apply !hidden md:!flex;
    svg {
      @apply -translate-x-1 w-6 h-6 ml-2 transition-transform duration-300 ease-out-relax;
    }

    &:hover {
      svg {
        @apply translate-x-0;
      }
    }
  }

  &__button-more-mobile {
    @apply flex items-center justify-center flex-shrink-0 md:hidden h-9 w-9 bg-transparent border border-chestnut-500 rounded-full;
    svg {
      @apply text-chestnut-500 h-6 w-6;
    }
  }

  &__body {
    @apply w-full relative grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5;
  }
}
</style>
