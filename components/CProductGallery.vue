<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /* List of images for gallery */
    listImages?: string[]
  }>(),
  {
    listImages: () => [],
  },
)

const emit = defineEmits<{
  /* Emit event when user click on image */
  (e: 'changeImage', value: number): void
  (e: 'closeModal'): void
  (e: 'openModal'): void
}>()

const imageActive = ref(0)
const openModal = ref(false)

function changeImage(index: number) {
  imageActive.value = index
  emit('changeImage', index)
}

function clickCloseModal() {
  openModal.value = false
  emit('closeModal')
}

function clickOpenModal() {
  openModal.value = true
  emit('openModal')
}

const imageMain = computed(() => props.listImages[imageActive.value])
</script>
<template>
  <div v-if="props.listImages.length" class="c-product-gallery">
    <div class="c-product-gallery__box-main" @click="clickOpenModal">
      <img
        class="c-product-gallery__box-main-img"
        :src="imageMain"
        alt="Product Image"
      />
    </div>
    <div class="c-product-gallery__box-list">
      <button
        v-for="(img, i) in listImages"
        :key="`image-content-${i}`"
        class="c-product-gallery__box-list-img"
        :class="{
          'c-product-gallery__box-list-img--active': i === imageActive,
        }"
        @click="changeImage(i)"
      >
        <img :src="img" alt="Product Image" />
      </button>
    </div>
    <Teleport to="body">
      <Transition name="c-product-gallery__fade">
        <div v-if="openModal" class="c-product-gallery__modal">
          <div
            class="c-product-gallery__modal-overlay-trigger"
            @click="clickCloseModal"
          />
          <div class="c-product-gallery__modal-content">
            <button
              class="c-product-gallery__modal-button-close"
              @click="clickCloseModal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <img :src="imageMain" alt="Product Image" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="postcss" scoped>
.c-product-gallery {
  @apply relative w-full flex flex-col space-y-3;

  &__box-main {
    @apply relative w-full pt-[100%] cursor-pointer;

    &-img {
      @apply absolute left-0 top-0 w-full h-full object-cover rounded-xl;
    }
  }

  &__box-list {
    @apply relative w-full flex space-x-3 overflow-x-auto p-1;

    &-img {
      @apply w-14 h-14 flex-shrink-0 md:w-20 md:h-20 bg-gray-200 relative rounded-md outline-2 outline outline-transparent transition-all duration-300 ease-out-relax overflow-hidden;
      img {
        @apply absolute left-0 top-0 w-full h-full object-cover rounded-md;
      }
      &--active {
        @apply outline-chestnut-500;

        img {
          @apply blur-[2px];
        }
      }
    }
  }

  &__modal {
    @apply fixed left-0 w-full h-full inset-0 bg-black/60 flex items-center justify-center z-[999] p-4;

    &-content {
      @apply relative w-full max-w-[600px] h-auto rounded-xl shadow-lg z-10;
      img {
        @apply w-full h-auto max-h-[600px] object-cover rounded-xl;
      }
    }

    &-button-close {
      @apply absolute -top-10 md:-top-14 right-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-lg z-10;

      svg {
        @apply w-5 h-5 md:w-6 md:h-6;
      }
    }

    &-overlay-trigger {
      @apply absolute left-0 top-0 w-full h-full;
    }
  }

  &__fade-enter-active,
  &__fade-leave-active {
    @apply transition-opacity duration-300 ease-out-regular;
  }

  &__fade-enter-from,
  &__fade-leave-to {
    @apply opacity-0;
  }
}
</style>
