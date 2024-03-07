<script lang="ts" setup>
import type { ArticleCard } from '~/types/general'

const props = defineProps<ArticleCard>()
</script>
<template>
  <div class="c-card-article">
    <NuxtLink :to="props.link" class="c-card-article__box-image">
      <img
        :src="props.image"
        :alt="props.title"
        class="c-card-article__image"
      />
    </NuxtLink>
    <div class="c-card-article__content">
      <div class="c-card-article__text-wrap">
        <h3 class="c-card-article__name">
          <NuxtLink :to="props.link">{{ props.title }}</NuxtLink>
        </h3>
        <p class="c-card-article__text">{{ props.description }}</p>
      </div>
      <div v-if="props.tags?.length" class="c-card-article__tag-wrap">
        <template v-for="tag in props.tags" :key="tag">
          <span class="c-card-article__tag">{{ tag }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-card-article {
  @apply relative w-full h-full flex flex-col p-2 rounded-xl border border-gray-200 bg-white;

  &__box-image {
    @apply relative rounded-xl w-full pt-[70%] mb-2 flex;
  }
  &__image {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-xl;
  }
  &__content {
    @apply w-full flex flex-col flex-1 items-start justify-between px-2 pt-2;
  }

  &__text-wrap {
    @apply flex flex-col mb-4;
  }

  &__tag-wrap {
    @apply w-full flex flex-wrap;
  }
  &__tag {
    @apply inline-flex text-xs font-medium text-chestnut-700 bg-chestnut-100 rounded-full py-[2px] px-3 mb-2.5 mr-2;
  }
  &__name {
    @apply text-base font-bold text-gray-800 mb-1 hover:underline;
  }
  &__text {
    @apply text-sm text-gray-600;
  }
}
</style>
