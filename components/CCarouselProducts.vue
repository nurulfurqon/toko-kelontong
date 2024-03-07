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

const { reformateSlug, convertToUSD } = useHelper()

const carouselContainer = ref<HTMLElement | null>(null)
const carouselItem = ref<HTMLElement[] | null>(null)

const { x } = useScroll(carouselContainer, { behavior: 'smooth' })
const isMobile = ref(false)

const { width } = useWindowSize()

watch(
  () => width.value,
  (value) => {
    isMobile.value = value < 768
  },
)

onMounted(() => {
  isMobile.value = width.value < 768
})

const itemWidth = computed(() => {
  if (carouselItem.value) {
    return carouselItem.value[0].clientWidth
  }
  return 0
})

const lastItemPosition = computed(() => {
  if (carouselItem.value) {
    const lastItem =
      carouselItem.value[carouselItem.value.length - 2].offsetLeft
    return lastItem
  }
  return 0
})

function handleClickNext() {
  x.value += itemWidth.value
}

function handleClickPrev() {
  x.value -= itemWidth.value
}

const isPrevButtonHide = computed(() => x.value === 0)
const isNextButtonHide = computed(() => x.value >= lastItemPosition.value)
</script>

<template>
  <div class="c-carousel-products">
    <template v-if="!isMobile">
      <button
        class="c-carousel-products__button-trigger c-carousel-products__button-trigger--prev"
        :class="{
          'c-carousel-products__button-trigger--hide': isPrevButtonHide,
        }"
        @click="handleClickPrev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="c-carousel-products__button-trigger c-carousel-products__button-trigger--next"
        :class="{
          'c-carousel-products__button-trigger--hide': isNextButtonHide,
        }"
        @click="handleClickNext"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="rotate-180"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </template>
    <div ref="carouselContainer" class="c-carousel-products__wrapper">
      <div
        v-for="(product, i) in props.listProducts"
        ref="carouselItem"
        :key="`product-${i}`"
        class="c-carousel-products__item"
      >
        <CCardProduct
          :image="product.thumbnail"
          :title="product.title"
          :price="convertToUSD(product.price || 0)"
          :category="reformateSlug(product.category || '')"
          :rating="product.rating"
          :link="`/p/${product.category}/${product.id}`"
          button-label="View Product"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-carousel-products {
  @apply w-full relative;

  &__wrapper {
    @apply w-full overflow-x-scroll py-5 space-x-3 md:space-x-5 flex snap-mandatory snap-x;

    &::-webkit-scrollbar {
      @apply hidden;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &__item {
    @apply w-[200px] md:w-[280px] flex-shrink-0 snap-center;
  }

  &__button-trigger {
    @apply absolute top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center bg-white text-chestnut-500 border border-gray-200 h-12 w-12 rounded-full shadow z-10 transition duration-300 ease-out-regular hover:bg-cyan-50 hover:shadow-lg opacity-100;
    &--prev {
      @apply -left-6;
    }
    &--next {
      @apply -right-6;
    }

    &--hide {
      @apply opacity-0 pointer-events-none;
    }

    svg {
      @apply w-6 h-6 fill-chestnut-500;
    }
  }
}
</style>
