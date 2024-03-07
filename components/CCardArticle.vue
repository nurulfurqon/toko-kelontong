<script lang="ts" setup>
interface Image {
  png: string
  webp: string
}

const props = withDefaults(
  defineProps<{
    name?: string
    tag?: string
    text?: string
    image?: Image
  }>(),
  {
    name: '',
    tag: '',
    text: '',
    image: () => ({
      png: '',
      webp: '',
    }),
  },
)
</script>
<template>
  <div class="c-card-article">
    <div class="c-card-article__box-image">
      <picture>
        <source type="image/webp" :srcset="props.image.webp" />
        <source type="image/png" :srcset="props.image.png" />
        <img
          :src="props.image.png"
          :alt="props.name"
          class="c-card-article__image"
        />
      </picture>
    </div>
    <div class="c-card-article__content">
      <span v-if="props.tag" class="c-card-article__tag">{{ props.tag }}</span>
      <h3 class="c-card-article__name">{{ props.name }}</h3>
      <p class="c-card-article__text">{{ props.text }}</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-card-article {
  @apply relative w-full h-full p-2 rounded-xl border border-gray-100 shadow-xl shadow-gray-200/70 bg-white;

  &__box-image {
    @apply relative rounded-xl w-full pt-[70%] mb-2;
  }
  &__image {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-xl;
  }
  &__content {
    @apply w-full flex flex-col items-start p-2;
  }
  &__tag {
    @apply inline-flex text-[10px] font-bold text-white bg-chestnut-500 rounded-full py-[2px] px-3 mb-2.5;
  }
  &__name {
    @apply text-base font-bold text-[#00171F] mb-2;
  }
  &__text {
    @apply text-sm text-[#242B33];
  }
}
</style>
