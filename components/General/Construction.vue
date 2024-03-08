<template>
  <section class="construction">
    <img
      class="construction__img"
      src="/images/construction.png"
      alt="Under construction"
    />
    <h3 class="construction__title">Oops! page under construction</h3>
  </section>
</template>

<style lang="postcss" scoped>
.construction {
  @apply w-full min-h-screen bg-white flex flex-col items-center justify-center py-14 md:py-20;

  &__img {
    @apply w-36 h-36 md:w-44 md:h-44 object-cover;
  }

  &__title {
    @apply mt-4 text-lg font-semibold;
  }
}
</style>
