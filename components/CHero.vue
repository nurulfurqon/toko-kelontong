<template>
  <section class="c-hero">
    <div class="c-hero__wrapper">
      <h2 class="c-hero__title">
        <slot name="title"></slot>
      </h2>
      <p class="c-hero__text">
        <slot name="text"></slot>
      </p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.c-hero {
  @apply w-full relative flex flex-col items-center bg-gradient-to-t from-pink-lady-100 to-90% to-pink-lady-50;
  &__wrapper {
    @apply relative w-full max-w-[1212px] pb-10 pt-[206px] px-4 md:pb-20 flex flex-col items-start;
  }

  &__title {
    @apply text-4xl md:text-6xl font-extrabold text-gray-800 leading-none;
  }

  &__text {
    @apply text-base md:text-lg font-medium text-gray-600 mt-5 md:mt-9;
  }
}
</style>
