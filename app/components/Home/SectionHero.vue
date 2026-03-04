<script lang="ts" setup>
import type { ProductItem } from '~/types/dummyjson'
const props = withDefaults(
  defineProps<{
    listProducts?: ProductItem[]
  }>(),
  {
    listProducts: () => [],
  },
)
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__wrapper">
      <div class="home-hero__content">
        <h2 class="home-hero__title">Meet This</h2>
        <h2 class="home-hero__title">Week's Star</h2>
        <p class="home-hero__text">
          Your New Favorite! Get excited for the hottest item on the block,
          carefully chosen with you in mind. It's got everything you need and
          more.
        </p>
      </div>
      <div class="home-hero__product">
        <CCarouselProducts :list-products="props.listProducts" />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.home-hero {
  @apply w-full relative flex flex-col items-center bg-gradient-to-t from-pink-lady-100 to-90% to-pink-lady-50;
  &__wrapper {
    @apply w-full min-h-screen max-w-[1212px] py-10 md:py-32 lg:py-[60px] px-4 flex flex-col lg:flex-row items-center md:justify-between relative;
  }

  &__content {
    @apply w-full max-w-[500px] flex flex-col items-start mb-5 mt-[40%] md:mt-0 md:mb-10 lg:mb-0;
  }

  &__title {
    @apply text-4xl md:text-7xl font-extrabold text-gray-800 leading-none;
  }

  &__text {
    @apply text-base md:text-lg font-medium text-gray-600 mt-5 md:mt-9;
  }

  &__product {
    @apply w-full md:max-w-[620px] md:px-5;
  }
}
</style>
