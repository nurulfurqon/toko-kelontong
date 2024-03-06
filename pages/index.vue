<script lang="ts" setup>
import { petKnowledgeArticles, listProducts, listPets } from '~/dummy'
</script>

<template>
  <div class="home-wrapper">
    <HomeSectionHero />
    <HomeSectionCatalog
      title="Take a look at some of our pets"
      subtitle="Whats new?"
      btn-more-label="View more"
      btn-more-link="/pets"
      :list-products="listPets"
    />
    <HomeSectionCatalog
      title="Our Products"
      subtitle="Hard to choose right products for your pets?"
      btn-more-label="View more"
      btn-more-link="/products"
      :list-products="listProducts"
    />
    <HomeSectionPetKnowledge
      title="Useful pet knowledge"
      subtitle="You already know ?"
      btn-more-label="View more"
      btn-more-link="/articles"
      :list-articles="petKnowledgeArticles"
    />
  </div>
</template>

<style lang="postcss" scoped>
.home-wrapper {
  @apply w-full min-h-screen bg-white;
}
</style>
