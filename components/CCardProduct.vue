<script lang="ts" setup>
import type { Image, ItemLabel } from '~/types/general'

const props = withDefaults(
  defineProps<{
    image?: Image
    name?: string
    labelInfo?: ItemLabel
    labelSpec?: ItemLabel
    price?: string
    promoInfo?: string
  }>(),
  {
    image: () => ({
      png: '',
      webp: '',
    }),
    name: '',
    labelInfo: () => ({
      name: '',
      value: '',
    }),
    labelSpec: () => ({
      name: '',
      value: '',
    }),
    price: '',
    promoInfo: '',
  },
)
</script>

<template>
  <div class="c-card-product">
    <div class="c-card-product__box-image">
      <picture>
        <source type="image/webp" :srcset="props.image.webp" />
        <source type="image/png" :srcset="props.image.png" />
        <img
          :src="props.image.png"
          :alt="props.name"
          class="c-card-product__image"
        />
      </picture>
    </div>
    <div class="c-card-product__content">
      <h3 class="c-card-product__name">{{ props.name }}</h3>
      <div class="c-card-product__box-info">
        <div class="c-card-product__box-info-wrapper">
          <p class="c-card-product__box-info-label">
            {{ props.labelInfo.name }}
          </p>
          <p class="c-card-product__box-info-value">
            {{ props.labelInfo.value }}
          </p>
        </div>
        <template v-if="props.labelSpec.name && props.labelSpec.value">
          <div class="c-card-product__box-info-dot">•</div>
          <div class="c-card-product__box-info-wrapper">
            <p class="c-card-product__box-info-label">
              {{ props.labelSpec.name }}
            </p>
            <p class="c-card-product__box-info-value">
              {{ props.labelSpec.value }}
            </p>
          </div>
        </template>
      </div>
      <p class="c-card-product__price">
        {{ props.price }}
      </p>
      <div v-if="props.promoInfo" class="c-card-product__box-promo">
        <img src="/images/icons/gift.svg" alt="Promo" />
        <div class="c-card-product__box-promo-dot">•</div>
        <p class="c-card-product__box-promo-text">{{ props.promoInfo }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-card-product {
  @apply relative w-full h-full p-2 rounded-xl border border-gray-100 shadow-xl shadow-gray-200/70 bg-white;

  &__box-image {
    @apply relative rounded-xl w-full pt-[100%] mb-2;
  }
  &__image {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-xl;
  }
  &__content {
    @apply w-full flex flex-col p-2;
  }
  &__name {
    @apply text-base font-bold text-[#00171F] mb-1;
  }
  &__box-info {
    @apply inline-flex items-center mb-1;

    &-wrapper {
      @apply flex items-center space-x-2;
    }
    &-label {
      @apply text-xs font-medium text-[#667479];
    }
    &-value {
      @apply text-xs font-bold text-[#667479];
    }
    &-dot {
      @apply text-sm text-[#667479] mx-2;
    }
  }
  &__price {
    @apply text-sm font-bold text-[#00171F];
  }
  &__box-promo {
    @apply relative w-full flex items-center px-3 py-1 rounded-lg bg-pink-lady-100 mt-3 space-x-2;

    &-dot {
      @apply text-base text-prussian-blue-900 pt-[2px];
    }
    &-text {
      @apply text-sm font-bold text-prussian-blue-900 pt-[2px];
    }
  }
}
</style>
