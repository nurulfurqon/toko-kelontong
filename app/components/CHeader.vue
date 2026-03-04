<script lang="ts" setup>
const search = defineModel<string>('search')
const props = withDefaults(
  defineProps<{
    /** List of category on header */
    categories?: string[]
    isSignedIn?: boolean
  }>(),
  {
    categories: () => [],
  },
)

const emit = defineEmits<{
  (e: 'submit', data: string): void
}>()

const isMobile = ref(false)

const { width } = useWindowSize()

watch(
  () => width.value,
  (value) => {
    isMobile.value = value < 768
  },
)

function handleSearch() {
  emit('submit', search.value || '')
}

onMounted(() => {
  isMobile.value = width.value < 768
})
</script>

<template>
  <header class="c-header">
    <div class="c-header__body">
      <div class="c-header__box-first-nav">
        <h1 class="c-header__logo">
          <NuxtLink to="/" label="Kelontong Logo" aria-label="Kelontong Logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 326 59"
              fill="none"
              class="hidden lg:block"
            >
              <path
                d="M80.935 31l10.472 14h-9.52l-8.96-12.376V45h-8.4V5.8h8.4v23.464L81.327 17h9.8L80.935 31zm40.945 3.36H102c.933 2.613 3.173 3.92 6.72 3.92 2.277 0 4.069-.709 5.376-2.128l6.72 3.864c-2.726 3.845-6.795 5.768-12.208 5.768-4.667 0-8.438-1.4-11.312-4.2-2.8-2.8-4.2-6.328-4.2-10.584 0-4.181 1.381-7.691 4.144-10.528 2.8-2.837 6.384-4.256 10.752-4.256 4.069 0 7.448 1.419 10.136 4.256 2.725 2.763 4.088 6.272 4.088 10.528 0 1.195-.112 2.315-.336 3.36zm-20.048-6.272h12.04c-.822-2.949-2.8-4.424-5.936-4.424-3.248 0-5.283 1.475-6.104 4.424zM135.38 45h-8.4V4.12h8.4V45zm30.115-3.472c-2.837 2.837-6.347 4.256-10.528 4.256s-7.691-1.419-10.528-4.256c-2.875-2.875-4.312-6.384-4.312-10.528 0-4.107 1.437-7.597 4.312-10.472s6.384-4.312 10.528-4.312 7.653 1.437 10.528 4.312 4.312 6.365 4.312 10.472c0 4.144-1.437 7.653-4.312 10.528zM148.527 31c0 1.941.616 3.528 1.848 4.76s2.763 1.848 4.592 1.848 3.36-.616 4.592-1.848 1.848-2.819 1.848-4.76-.616-3.528-1.848-4.76-2.763-1.848-4.592-1.848-3.36.616-4.592 1.848-1.848 2.819-1.848 4.76zm42.439-14.784c3.024 0 5.507 1.027 7.448 3.08 2.016 2.091 3.024 4.928 3.024 8.512V45h-8.4V29.04c0-1.605-.448-2.856-1.344-3.752s-2.072-1.344-3.528-1.344c-1.642 0-2.93.504-3.864 1.512-.896.971-1.344 2.389-1.344 4.256V45h-8.4V17h8.4v2.632c1.68-2.277 4.35-3.416 8.008-3.416zm32.649.784v8.064h-5.768v9.912c0 1.083.429 1.792 1.288 2.128.858.299 2.352.392 4.48.28V45c-5.302.56-8.998.056-11.088-1.512-2.054-1.605-3.08-4.443-3.08-8.512v-9.912h-4.48V17h4.48v-5.32l8.4-2.52V17h5.768zm29.271 24.528c-2.838 2.837-6.347 4.256-10.528 4.256s-7.691-1.419-10.528-4.256c-2.875-2.875-4.312-6.384-4.312-10.528 0-4.107 1.437-7.597 4.312-10.472s6.384-4.312 10.528-4.312 7.653 1.437 10.528 4.312 4.312 6.365 4.312 10.472c0 4.144-1.438 7.653-4.312 10.528zM235.918 31c0 1.941.616 3.528 1.848 4.76s2.762 1.848 4.592 1.848 3.36-.616 4.592-1.848 1.848-2.819 1.848-4.76-.616-3.528-1.848-4.76-2.763-1.848-4.592-1.848-3.36.616-4.592 1.848-1.848 2.819-1.848 4.76zm42.439-14.784c3.024 0 5.507 1.027 7.448 3.08 2.016 2.091 3.024 4.928 3.024 8.512V45h-8.4V29.04c0-1.605-.448-2.856-1.344-3.752s-2.072-1.344-3.528-1.344c-1.643 0-2.931.504-3.864 1.512-.896.971-1.344 2.389-1.344 4.256V45h-8.4V17h8.4v2.632c1.68-2.277 4.349-3.416 8.008-3.416zm36.792 3.64V17h8.176v26.6c0 4.405-1.437 7.728-4.312 9.968-2.837 2.277-6.328 3.416-10.472 3.416-6.346 0-10.77-2.259-13.272-6.776l7.168-4.144c1.307 2.352 3.435 3.528 6.384 3.528 2.016 0 3.566-.523 4.648-1.568 1.12-1.045 1.68-2.52 1.68-4.424v-2.576c-1.978 2.427-4.704 3.64-8.176 3.64-3.92 0-7.205-1.381-9.856-4.144-2.613-2.763-3.92-6.123-3.92-10.08s1.307-7.299 3.92-10.024c2.614-2.8 5.899-4.2 9.856-4.2 3.472 0 6.198 1.213 8.176 3.64zm-11.648 15.288c1.307 1.195 2.931 1.792 4.872 1.792s3.566-.597 4.872-1.792c1.27-1.157 1.904-2.725 1.904-4.704s-.634-3.547-1.904-4.704c-1.306-1.195-2.93-1.792-4.872-1.792s-3.565.597-4.872 1.792c-1.269 1.157-1.904 2.725-1.904 4.704s.635 3.547 1.904 4.704z"
                fill="#141414"
              />
              <path
                d="M48.558 23.678v19.433a4.71 4.71 0 0 1-1.435 3.454c-.957.958-2.108 1.437-3.454 1.435H9.447c-1.344 0-2.495-.478-3.452-1.435s-1.436-2.108-1.437-3.454V23.678c-.937-.856-1.66-1.956-2.168-3.3s-.519-2.811-.032-4.4l2.567-8.311c.326-1.059.907-1.935 1.743-2.628S8.47 4 9.569 4h33.978c1.1 0 2.057.337 2.872 1.01s1.406 1.559 1.772 2.657l2.567 8.311c.489 1.589.479 3.035-.029 4.339s-1.232 2.424-2.171 3.361zm-16.622-2.567c1.1 0 1.935-.376 2.506-1.129s.794-1.599.672-2.537l-1.344-8.556h-4.767v9.044a3.22 3.22 0 0 0 .856 2.232c.57.632 1.263.948 2.078.946zm-11 0c.937 0 1.701-.316 2.293-.948s.887-1.375.885-2.229V8.889h-4.767l-1.344 8.556c-.163.978.051 1.833.641 2.567s1.354 1.1 2.293 1.1zm-10.878 0c.733 0 1.375-.265 1.924-.794s.886-1.202 1.01-2.017l1.344-9.411H9.569l-2.444 8.189c-.244.815-.112 1.691.396 2.628s1.354 1.406 2.537 1.406zm33 0c1.181 0 2.037-.468 2.567-1.405s.652-1.813.367-2.628l-2.567-8.189H38.78l1.344 9.411c.122.815.459 1.487 1.01 2.017s1.192.794 1.924.794z"
                fill="#d8645a"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 54 54"
              fill="none"
              class="block lg:hidden"
            >
              <path
                d="M48.654 24.296v19.056a4.62 4.62 0 0 1-1.407 3.387 4.6 4.6 0 0 1-3.387 1.407H10.302a4.61 4.61 0 0 1-3.385-1.407c-.938-.938-1.408-2.067-1.409-3.387V24.296c-.919-.839-1.628-1.918-2.126-3.236s-.509-2.756-.031-4.315l2.517-8.15c.32-1.039.889-1.898 1.709-2.577S9.345 5 10.422 5H43.74c1.079 0 2.018.33 2.817.99s1.378 1.528 1.738 2.606l2.517 8.15c.479 1.558.47 2.976-.029 4.255s-1.208 2.377-2.128 3.296zm-16.3-2.517c1.079 0 1.898-.369 2.457-1.107a3.27 3.27 0 0 0 .659-2.488l-1.318-8.389h-4.674v8.869a3.16 3.16 0 0 0 .839 2.189c.559.62 1.238.929 2.037.928zm-10.786 0c.919 0 1.668-.31 2.248-.93s.869-1.349.868-2.186V9.794H20.01l-1.318 8.389c-.16.959.049 1.798.628 2.517a2.75 2.75 0 0 0 2.248 1.079zm-10.667 0A2.63 2.63 0 0 0 12.788 21c.538-.519.868-1.178.99-1.977l1.318-9.228h-4.674l-2.397 8.03c-.24.799-.11 1.658.388 2.577s1.328 1.378 2.488 1.378zm32.359 0c1.159 0 1.998-.459 2.517-1.378s.639-1.778.359-2.577l-2.517-8.03h-4.554l1.318 9.228c.12.799.45 1.458.99 1.977s1.169.779 1.886.779z"
                fill="#d8645a"
              />
            </svg>
          </NuxtLink>
        </h1>
        <CDropdownMenu :options="props.categories" />
      </div>
      <nav v-if="!isMobile" class="c-header__box-search-bar">
        <CSearchBar
          v-model="search"
          class="c-header__search-bar"
          placeholder="Search something here"
          @click-search="handleSearch"
          @enter="handleSearch"
        />
      </nav>
      <nav class="c-header__actions">
        <CButton variant="ghost" to="/wishlist" class="c-header__btn-wishlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5 mr-2"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"
            />
          </svg>
          Wishlist
        </CButton>
        <NuxtLink to="/wishlist" class="c-header__btn-wishlist-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"
            />
          </svg>
        </NuxtLink>
        <CButton v-if="!props.isSignedIn" class="c-header__btn-join">
          Login
        </CButton>
      </nav>
    </div>
    <div class="c-header__bottom-wrap">
      <CSearchBar
        v-model="search"
        class="c-header__search-bar"
        placeholder="Search something here"
        @click-search="handleSearch"
        @enter="handleSearch"
      />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.c-header {
  @apply w-full flex flex-col md:flex-row items-center justify-center fixed top-0 z-20 bg-pink-lady-50/80 backdrop-blur-md;

  &__body {
    @apply w-full max-w-[1212px] p-4 flex items-center;
  }

  &__bottom-wrap {
    @apply w-full px-4 pb-3 flex md:hidden;
  }

  &__logo {
    svg {
      @apply h-9 md:h-8;
    }
  }

  &__box-first-nav {
    @apply flex items-center justify-start flex-1 space-x-3 md:space-x-6;
  }

  &__box-search-bar {
    @apply hidden w-full max-w-md mx-3 md:flex justify-center items-center;
  }

  &__menu {
    @apply relative mr-9;

    &-list {
      @apply flex items-center space-x-12;
    }

    &-item {
      @apply text-base font-bold text-gray-800;
    }
  }

  &__btn-wishlist-circle {
    @apply flex items-center justify-center md:hidden h-9 w-9 bg-transparent border border-chestnut-500 rounded-full;
    svg {
      @apply text-chestnut-500 h-5 w-5;
    }
  }

  &__btn-wishlist {
    @apply !hidden md:!flex;
    svg {
      @apply h-5 w-5 mr-2;
    }
  }

  &__actions {
    @apply flex items-center justify-end space-x-3 md:space-x-3.5 flex-1;
  }

  &__btn-join {
    @apply w-auto flex-shrink-0;
  }

  &__search-bar {
    @apply w-full;
  }
}
</style>
