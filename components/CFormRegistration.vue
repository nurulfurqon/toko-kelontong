<script lang="ts" setup>
const model = defineModel<string>()
const props = withDefaults(
  defineProps<{
    /** Title of the form registration */
    title?: string
    /** Text of the submit button */
    buttonSubmit?: string
    /** Placeholder of the input */
    placeholder?: string
    /** Loading state of the form */
    loading?: boolean
  }>(),
  {
    title: '',
    buttonSubmit: '',
    placeholder: '',
  },
)

const emit = defineEmits<{
  /** Emit when the input is blurred */
  (event: 'blur', value: FocusEvent): void
  /** Emit when the input is focused */
  (event: 'focus', value: FocusEvent): void
  /** Emit when the input is keyup */
  (event: 'keyup', value: KeyboardEvent): void
  /** Emit when the input is keydown */
  (event: 'keydown', value: KeyboardEvent): void
  /** Emit when the button submit is clicked */
  (event: 'clickSubmit'): void
}>()

const isFoucs = ref(false)

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

function handleClickSubmit() {
  emit('clickSubmit')
}
</script>

<template>
  <div class="c-form-registration">
    <h3 class="c-form-registration__title">
      {{ props.title }}
    </h3>
    <div class="c-form-registration__box">
      <div
        class="c-form-registration__input"
        :class="{ 'c-form-registration__input--focus': isFoucs }"
      >
        <input
          v-model="model"
          type="text"
          :placeholder="props.placeholder"
          @blur="handleBlur"
          @focus="handleFocus"
          @keyup="handleKeyUp"
          @keydown="handleKeyDown"
        />
      </div>
      <button class="c-form-registration__button" @click="handleClickSubmit">
        <CSpinner v-if="props.loading" class="c-form-registration__spinner" />
        {{ props.buttonSubmit }}
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.c-form-registration {
  @apply w-full relative flex items-center p-8 rounded-2xl bg-prussian-blue-800 space-x-5;

  &__title {
    @apply text-2xl font-bold text-white max-w-[388px];
  }

  &__box {
    @apply flex-1 flex items-center bg-white rounded-[14px] p-3 space-x-3;
  }

  &__input {
    @apply relative flex flex-1 items-center rounded-lg bg-white px-7 py-3.5 outline outline-1 outline-[#99A2A5] transition-all ease-out-relax duration-300;

    &--focus {
      @apply outline-prussian-blue-800;
    }

    input {
      @apply w-full text-base font-medium placeholder-gray-400 text-gray-600 focus:outline-none;
    }
  }

  &__button {
    @apply relative inline-flex items-center justify-center px-7 py-3 rounded-lg text-base font-medium bg-prussian-blue-800 text-white transition-colors duration-300 ease-out-relax hover:bg-prussian-blue-900;
  }

  &__spinner {
    @apply w-5 h-5 mr-2;
  }
}
</style>
