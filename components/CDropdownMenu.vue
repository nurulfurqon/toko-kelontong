<script lang="ts" setup>
const isOptionsExpanded = ref(false)
const { reformateSlug } = useHelper()

const props = withDefaults(
  defineProps<{
    /* List of options for dropdown menu */
    options?: string[]
    label?: string
  }>(),
  {
    options: () => [],
    label: 'Category',
  },
)
</script>

<template>
  <div class="c-dropdown-menu">
    <button
      class="c-dropdown-menu__button"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <span>{{ props.label }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="c-dropdown-menu__icon"
        :class="{ 'c-dropdown-menu__icon--rotate': isOptionsExpanded }"
        width="8"
        height="5"
        fill="none"
      >
        <path
          d="M7 1L4 4L1 1"
          stroke="#002a48"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <Transition :duration="450" name="fade">
      <ul v-show="isOptionsExpanded" class="c-dropdown-menu__list">
        <li
          v-for="(option, i) in props.options"
          :key="`menu-dropdown-${i}`"
          class="c-dropdown-menu__list-item menu-transition"
        >
          <NuxtLink
            :to="`/categories/${option}`"
            class="c-dropdown-menu__list-link"
          >
            {{ reformateSlug(option) }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.c-dropdown-menu {
  @apply relative inline-flex px-2;

  &__button {
    @apply inline-flex items-center justify-center space-x-4;
    span {
      @apply text-base font-medium leading-none text-gray-800;
    }
  }

  &__icon {
    @apply transition-transform duration-300 ease-out-regular;

    &--rotate {
      @apply rotate-180;
    }
  }

  &__list {
    @apply absolute top-12 left-0 w-[600px] right-0 translate-y-0 scale-y-100  mb-4 bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-3 p-2;

    &-item {
      @apply flex items-center text-base font-medium space-x-3 text-gray-800 transition-colors duration-300 ease-out-regular hover:bg-chestnut-100 rounded-md;
    }

    &-link {
      @apply w-full h-full px-3 py-2 capitalize;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition duration-200 ease-out-strong;

  .menu-transition {
    @apply transition-opacity duration-300 ease-out-regular;
  }
}
.fade-enter-active {
  .menu-transition {
    @apply delay-200;
  }
}

.fade-enter-from {
  @apply -translate-y-1/2 scale-y-0;

  .menu-transition {
    @apply opacity-0;
  }
}

.fade-leave-to {
  @apply opacity-0;
}
</style>
