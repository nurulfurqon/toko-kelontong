<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /** Href of the button use nuxt-link */
    to?: string
    /** Variations of the button */
    variant?: 'solid' | 'outline' | 'ghost'
    /** Loading is only affected when props to is empty */
    loading?: boolean
  }>(),
  {
    to: '',
    variant: 'solid',
  },
)

const classes = computed(() => {
  return {
    'c-button--solid': props.variant === 'solid',
    'c-button--outline': props.variant === 'outline',
    'c-button--ghost': props.variant === 'ghost',
  }
})
</script>
<template>
  <NuxtLink v-if="props.to" :to="props.to" class="c-button" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else class="c-button" :class="classes">
    <CSpinner v-if="props.loading" class="c-button__spinner" />
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.c-button {
  @apply relative inline-flex items-center justify-center px-7 py-3 rounded-full text-base font-medium;

  &--solid {
    @apply bg-chestnut-500 text-white transition-colors duration-300 ease-out-relax hover:bg-chestnut-600;
    svg {
      @apply fill-white;
    }
  }

  &--outline {
    @apply border-2 border-chestnut-500 text-chestnut-500 transition-colors duration-300 ease-out-relax hover:bg-chestnut-100;
    svg {
      @apply fill-chestnut-500;
    }
  }

  &--ghost {
    @apply text-chestnut-500 transition-colors duration-300 ease-out-relax hover:bg-chestnut-100;
    svg {
      @apply fill-chestnut-500;
    }
  }

  &__spinner {
    @apply w-5 h-5 mr-2;
  }
}
</style>
