<script lang="ts" setup>
import type { ArticleItem } from '~/types/general'
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    btnMoreLabel?: string
    btnMoreLink?: string
    listArticles?: ArticleItem[]
  }>(),
  {
    title: '',
    subtitle: '',
    btnMoreLabel: '',
    btnMoreLink: '',
    listArticles: () => [],
  },
)
</script>

<template>
  <section class="home-pet-knowledge">
    <div class="home-pet-knowledge__wrapper">
      <div class="home-pet-knowledge__header">
        <div>
          <p class="home-pet-knowledge__header-subtitle">
            {{ props.subtitle }}
          </p>
          <h2 class="home-pet-knowledge__header-title">{{ props.title }}</h2>
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
      <div class="home-pet-knowledge__body">
        <NuxtLink
          v-for="(article, i) in props.listArticles"
          :key="`article-${i}`"
          :to="article.link"
        >
          <CCardArticle
            :name="article.name"
            :tag="article.tag"
            :text="article.text"
            :image="article.image"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.home-pet-knowledge {
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
    @apply w-full relative grid grid-cols-3 gap-5;
  }
}
</style>
