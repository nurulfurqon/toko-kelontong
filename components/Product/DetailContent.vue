<script lang="ts" setup>
import type { ProductItem } from '~/types/dummyjson'

const { reformateSlug, convertToUSD } = useHelper()

const props = withDefaults(
  defineProps<{
    product: ProductItem
  }>(),
  {
    product: () => ({}) as ProductItem,
  },
)
</script>
<template>
  <section class="product-detail-content">
    <div class="product-detail-content__wrapper">
      <div class="product-detail-content__gallery">
        <CProductGallery :list-images="props.product.images" />
      </div>
      <div class="product-detail-content__info">
        <h2>{{ props.product.title }}</h2>
        <div class="product-detail-content__info-box-brand">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307a4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397a4.491 4.491 0 0 1-1.307 3.497a4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549a4.49 4.49 0 0 1-3.498-1.306a4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497a4.49 4.49 0 0 1 3.497-1.307m7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
              clip-rule="evenodd"
            />
          </svg>
          <h3>{{ props.product.brand }}</h3>
        </div>
        <div class="product-detail-content__info-wrap">
          <div class="product-detail-content__info-category">
            {{ reformateSlug(props.product.category || '') }}
          </div>
          <div class="product-detail-content__info-rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{{ props.product.rating }}</p>
          </div>
        </div>
        <div class="product-detail-content__info-box-price">
          <p class="product-detail-content__info-box-price-text">Price:</p>
          <p class="product-detail-content__info-box-price-price">
            {{ convertToUSD(props.product.price || 0) }}
          </p>
        </div>
        <div class="product-detail-content__info-box-about">
          <p class="product-detail-content__info-box-about-text">
            Description:
          </p>
          <p class="product-detail-content__info-box-about-desc">
            {{ props.product.description }}
          </p>
        </div>
        <div class="product-detail-content__info-box-about">
          <p class="product-detail-content__info-box-about-text">
            Stock: <b>{{ props.product.stock }}</b>
          </p>
        </div>
        <div class="product-detail-content__info-box-button">
          <CButton class="product-detail-content__info-btn-cart"
            >Buy Now</CButton
          >
          <button class="product-detail-content__btn-wishlist-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.product-detail-content {
  @apply w-full relative flex flex-col items-center bg-white;
  &__wrapper {
    @apply w-full max-w-[1212px] pt-[140px] lg:pt-[120px] px-4 flex flex-col md:flex-row items-start md:justify-between;
  }

  &__gallery {
    @apply lg:sticky lg:top-[86px] md:flex-1 max-w-lg w-full;
  }

  &__info {
    @apply flex flex-col md:flex-1 w-full py-6 md:px-10 md:py-5;

    h2 {
      @apply text-2xl md:text-4xl font-semibold text-gray-800;
    }

    &-wrap {
      @apply flex flex-wrap w-full my-4 md:my-5;
    }

    &-box-brand {
      @apply flex items-center space-x-1;

      h3 {
        @apply text-sm md:text-base font-medium text-gray-800 mt-[2px];
      }

      svg {
        @apply w-4 h-4 md:w-5 md:h-5 text-blue-500 fill-blue-500;
      }
    }
    &-category {
      @apply text-xs md:text-sm capitalize bg-chestnut-200 flex-shrink-0 px-2 pt-[2px] md:pt-1 mb-2 mr-3 rounded-md font-medium text-chestnut-800;
    }
    &-rating {
      @apply flex items-center space-x-1 mb-2;

      svg {
        @apply w-4 h-4 md:w-5 md:h-5 text-yellow-400;
      }

      p {
        @apply text-sm md:text-base font-medium mt-1 text-gray-800 leading-none;
      }
    }

    &-box-price {
      @apply flex flex-col space-y-2 mb-5 md:space-y-3 md:mb-7;

      &-text {
        @apply text-sm md:text-base font-medium text-gray-700;
      }

      &-price {
        @apply text-2xl md:text-4xl font-semibold text-gray-800;
      }
    }

    &-box-about {
      @apply flex flex-col space-y-2 md:space-y-3 mb-5;

      &-text {
        @apply text-sm md:text-base font-medium text-gray-700;
      }

      &-desc {
        @apply text-sm md:text-base md:max-w-[80%] font-normal text-gray-800;
      }
    }

    &-box-button {
      @apply flex items-center space-x-3 my-5;
    }

    &-btn-cart {
      @apply w-full md:w-auto;
    }
  }

  &__btn-wishlist-circle {
    @apply flex items-center justify-center h-9 w-9 flex-shrink-0 md:h-12 md:w-12 bg-white shadow-md border border-gray-200 rounded-full transition-colors ease-out-relax duration-300 hover:bg-chestnut-50;
    svg {
      @apply text-chestnut-500 h-5 w-5 md:h-6 md:w-6;
    }
  }
}
</style>
