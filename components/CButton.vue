<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /** Href of the button use nuxt-link */
    to?: string
    /** Variations of the button */
    variant?: 'solid' | 'outline'
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
    @apply bg-prussian-blue-800 text-white transition-colors duration-300 ease-out-relax hover:bg-prussian-blue-900;
    svg {
      @apply fill-white;
    }
  }

  &--outline {
    @apply border-2 border-prussian-blue-800 text-prussian-blue-800 transition-colors duration-300 ease-out-relax hover:bg-prussian-blue-50/50;
    svg {
      @apply fill-prussian-blue-800;
    }
  }

  &__spinner {
    @apply w-5 h-5 mr-2;
  }
}
</style>
