<script lang="ts" setup>
const model = defineModel<string>()
const props = withDefaults(
  defineProps<{
    /** Placeholder of the search bar */
    placeholder?: string
  }>(),
  {
    placeholder: '',
  },
)

const emit = defineEmits<{
  /** Emit when the search bar is entered */
  (event: 'enter', value: KeyboardEvent): void
  /** Emit when the search bar is blurred */
  (event: 'blur', value: FocusEvent): void
  /** Emit when the search bar is focused */
  (event: 'focus', value: FocusEvent): void
  /** Emit when the search bar is keyup */
  (event: 'keyup', value: KeyboardEvent): void
  /** Emit when the search bar is keydown */
  (event: 'keydown', value: KeyboardEvent): void
  /** Emit when the search bar is clicked */
  (event: 'clickSearch'): void
}>()

function handleBlur(event: FocusEvent) {
  isFoucs.value = false
  emit('blur', event)
}

function handleFocus(event: FocusEvent) {
  isFoucs.value = true
  emit('focus', event)
}

function handleKeyUp(event: KeyboardEvent) {
  emit('keyup', event)
}

function handleKeyDown(event: KeyboardEvent) {
  emit('keydown', event)
}

function handleEnter(event: KeyboardEvent) {
  emit('enter', event)
}

function handleClickSearch() {
  emit('clickSearch')
}

const isFoucs = ref(false)
</script>

<template>
  <div class="c-search-bar" :class="{ 'c-search-bar--focus': isFoucs }">
    <input
      v-model="model"
      type="text"
      class="c-search-bar__input"
      :placeholder="props.placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup="handleKeyUp"
      @keydown="handleKeyDown"
      @keydown.enter="handleEnter"
    />
    <button class="c-search-bar__button" @click="handleClickSearch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="c-search-bar__icon"
        viewBox="0 0 20 20"
      >
        <path
          d="M18.092 16.908L15 13.842a7.5 7.5 0 0 0-.845-10.278 7.5 7.5 0 0 0-10.309.282 7.5 7.5 0 0 0-.282 10.309A7.5 7.5 0 0 0 13.842 15l3.067 3.067c.078.078.17.14.271.182s.21.064.32.064.219-.022.32-.064.194-.104.271-.182c.15-.155.234-.363.234-.579s-.084-.424-.234-.579zM9.167 15c-1.154 0-2.282-.342-3.241-.983s-1.707-1.552-2.148-2.618-.557-2.239-.332-3.37.781-2.171 1.596-2.987 1.855-1.371 2.987-1.596 2.304-.11 3.37.332 1.977 1.189 2.618 2.148S15 8.013 15 9.167c0 1.547-.615 3.031-1.709 4.125S10.714 15 9.167 15z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.c-search-bar {
  @apply relative flex items-center rounded-full bg-white p-2 outline outline-2 outline-transparent transition-all ease-out-relax duration-300 shadow border border-gray-200;

  &--focus {
    @apply outline-chestnut-500;
  }

  &__input {
    @apply flex-1 text-base font-medium placeholder-gray-400 text-gray-600 focus:outline-none ml-3;
  }

  &__button {
    @apply ml-3 cursor-pointer bg-chestnut-500 hover:bg-chestnut-600 p-2 rounded-full;
  }

  &__icon {
    @apply w-5 h-5 fill-white;
  }
}
</style>
