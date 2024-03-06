<script lang="ts" setup>
import type { ProductItem } from '~/types/general'
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
        <CButton :to="props.btnMoreLink" variant="outline">
          {{ props.btnMoreLabel }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M8.333 6.667L11.667 10l-3.333 3.333"
              stroke="#003459"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CButton>
      </div>
      <div class="home-catalog__body">
        <NuxtLink
          v-for="(product, i) in props.listProducts"
          :key="`product-${i}`"
          :to="product.link"
        >
          <CCardProduct
            :image="product.image"
            :name="product.name"
            :label-info="product.labelInfo"
            :label-spec="product.labelSpec"
            :price="product.price"
            :promo-info="product.promoInfo"
          />
        </NuxtLink>
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
    @apply w-full flex items-end justify-between mb-7;

    &-subtitle {
      @apply text-base font-medium text-gray-900;
    }

    &-title {
      @apply text-2xl font-bold text-prussian-blue-800;
    }
  }

  &__body {
    @apply w-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5;
  }
}
</style>
