<script lang="ts" setup>
const isOptionsExpanded = ref(false)
const selectedOption = ref('en')

const options = [
  {
    name: 'EN',
    value: 'en',
    flag: '/images/flags/us.svg',
  },
  {
    name: 'ID',
    value: 'id',
    flag: '/images/flags/id.svg',
  },
]

function getOption(value: string) {
  return options.find((option) => option.value === value)
}

function setOption(value: string) {
  selectedOption.value = value
  isOptionsExpanded.value = false
}
</script>

<template>
  <div class="c-dropdown-lang">
    <button
      class="c-dropdown-lang__button"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <img
        :src="getOption(selectedOption)?.flag"
        :alt="`${getOption(selectedOption)?.name} flag`"
        class="c-dropdown-lang__flag"
      />
      <span>{{ getOption(selectedOption)?.name }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="c-dropdown-lang__icon"
        :class="{ 'c-dropdown-lang__icon--rotate': isOptionsExpanded }"
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
    <Transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul v-show="isOptionsExpanded" class="c-dropdown-lang__list">
        <li
          v-for="option in options"
          :key="`lang-${option.value}`"
          class="c-dropdown-lang__list-item"
          @mousedown.prevent="setOption(option.value)"
        >
          <img
            :src="option.flag"
            :alt="`${option.name} option flag`"
            class="c-dropdown-lang__flag"
          />
          <span>{{ option.name }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.c-dropdown-lang {
  @apply relative inline-flex px-2;

  &__button {
    @apply inline-flex items-center justify-center space-x-4;
    span {
      @apply text-base font-medium leading-none text-prussian-blue-800;
    }
  }

  &__icon {
    @apply transition-transform duration-300 ease-out-regular;

    &--rotate {
      @apply rotate-180;
    }
  }

  &__flag {
    @apply w-5 h-5 rounded-full object-cover;
  }

  &__list {
    @apply absolute top-7 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden;

    &-item {
      @apply flex items-center px-3 py-2 text-base font-medium space-x-3 text-prussian-blue-800 transition-colors duration-300 ease-out-relax hover:bg-prussian-blue-50 cursor-pointer;
    }
  }
}

.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
