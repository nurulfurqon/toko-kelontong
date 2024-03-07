<script lang="ts" setup>
import type { PostItem } from '~/types/dummyjson'

const { truncate } = useHelper()

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    listArticles?: PostItem[]
  }>(),
  {
    title: '',
    subtitle: '',
    listArticles: () => [],
  },
)
</script>

<template>
  <section class="home-articles">
    <div class="home-articles__wrapper">
      <div class="home-articles__header">
        <div>
          <p class="home-articles__header-subtitle">
            {{ props.subtitle }}
          </p>
          <h2 class="home-articles__header-title">{{ props.title }}</h2>
        </div>
      </div>
      <div class="home-articles__body">
        <template
          v-for="(article, i) in props.listArticles"
          :key="`article-${i}`"
        >
          <CCardArticle
            :title="article.title"
            :tags="article.tags"
            :description="truncate(article.body || '', 100)"
            :link="`/articles/${article.id}`"
            image="https://source.unsplash.com/random/400×400"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.home-articles {
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

  &__body {
    @apply w-full relative grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5;
  }
}
</style>
