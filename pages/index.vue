<script lang="ts" setup>
const showcases = useShowcases()

if (!showcases.topProducts.length) {
  await showcases.fetchTopProducts()
}

if (!showcases.mostBuyedProducts.length) {
  await showcases.fetchMostBuyedProducts()
}

if (!showcases.recomendedProducts.length) {
  await showcases.fetchRecomendedProducts()
}

if (!showcases.latestPosts.length) {
  await showcases.fetchLatestPosts()
}
</script>

<template>
  <div class="home-wrapper">
    <HomeSectionHero :list-products="showcases.topProducts" />
    <HomeSectionCatalog
      title="Discover Your Décor Delights Online"
      subtitle="Home inspiration"
      btn-more-label="View more"
      btn-more-link="/c/home-decoration"
      :list-products="showcases.mostBuyedProducts"
    />
    <HomeSectionCatalog
      title="Beaty & Personal Care"
      subtitle="Best seller products for you"
      btn-more-label="View more"
      btn-more-link="/c/skincare"
      :list-products="showcases.recomendedProducts"
    />
    <HomeSectionArticles
      title="Insightful articles for you"
      subtitle="Latest articles"
      :list-articles="showcases.latestPosts"
    />
  </div>
</template>

<style lang="postcss" scoped>
.home-wrapper {
  @apply w-full min-h-screen bg-white divide-y;
}
</style>
