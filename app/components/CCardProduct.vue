<script lang="ts" setup>
import type { ProductCard } from '~/types/general'
const props = defineProps<ProductCard>()
</script>

<template>
  <div class="c-card-product">
    <NuxtLink :to="props.link" class="c-card-product__box-image">
      <img
        :src="props.image"
        :alt="props.title"
        class="c-card-product__image"
      />
    </NuxtLink>
    <div class="c-card-product__content">
      <div class="c-card-product__content-div">
        <h3 class="c-card-product__name">
          <NuxtLink :to="props.link">{{ props.title }}</NuxtLink>
        </h3>
        <div class="c-card-product__box-info">
          <div v-if="props.category" class="c-card-product__category">
            {{ props.category }}
          </div>
          <div class="c-card-product__rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{{ props.rating }}</p>
          </div>
        </div>
      </div>
      <div class="c-card-product__wrap">
        <p
          class="c-card-product__price"
          :class="{ 'c-card-product__price--disabled': props.isDiscount }"
        >
          {{ props.price }}
        </p>
        <div v-if="props.isDiscount" class="c-card-product__promo">
          <p class="c-card-product__price">
            {{ props.discountPrice }}
          </p>
          <p class="c-card-product__promo-discount">
            ({{ props.discount }}% off)
          </p>
        </div>
      </div>
      <!-- <div class="c-card-product__button">{{ props.buttonLabel }}</div> -->
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-card-product {
  @apply relative flex flex-col w-full h-full p-2 rounded-xl border border-gray-200 bg-white transition-shadow duration-300 ease-out-relax hover:shadow-md;

  &__box-image {
    @apply relative rounded-xl w-full pt-[100%] mb-2;
  }
  &__image {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-xl;
  }
  &__content {
    @apply w-full flex flex-col flex-1 p-1 md:p-2 justify-between;

    &-div {
      @apply flex flex-col;
    }
  }

  &__wrap {
    @apply flex flex-wrap;
  }
  &__name {
    @apply text-base font-bold text-gray-800 leading-tight mb-2 hover:underline;
  }
  &__box-info {
    @apply flex flex-wrap items-center mb-4;
  }
  &__category {
    @apply text-xs md:text-sm capitalize bg-chestnut-200 flex-shrink-0 px-2 py-[2px] mb-2 mr-3 rounded-md font-medium text-chestnut-800;
  }
  &__rating {
    @apply flex items-center space-x-1 mb-2;

    svg {
      @apply w-4 h-4 md:w-5 md:h-5 text-yellow-400;
    }

    p {
      @apply text-sm md:text-base font-medium mt-1 text-gray-800 leading-none;
    }
  }
  &__price {
    @apply text-lg md:text-xl font-medium text-gray-800;

    &--disabled {
      @apply line-through text-gray-400 mr-2;
    }
  }
  &__promo {
    @apply flex items-start space-x-1;
    &-discount {
      @apply text-xs mt-1 md:text-sm md:mt-[2px] font-medium text-green-600;
    }
  }
  &__button {
    @apply relative w-full text-sm md:text-base flex items-center justify-center px-3 py-2 text-center rounded-lg bg-chestnut-500 text-white font-medium capitalize mt-4 space-x-2 ease-out-regular transition duration-300 hover:bg-chestnut-600;
  }
}
</style>
