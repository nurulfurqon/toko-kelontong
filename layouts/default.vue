<script lang="ts" setup>
const menu = [
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
  { name: 'Terms of Service', link: '/terms-of-service' },
  { name: 'Privacy Policy', link: '/privacy-policy' },
]

const menuCopyRight = [
  { name: 'Terms of Service', link: '/terms-of-service' },
  { name: 'Privacy Policy', link: '/privacy-policy' },
]

const menuSocialMedia = [
  { icon: '/images/icons/facebook.svg', link: 'https://www.facebook.com' },
  { icon: '/images/icons/twitter.svg', link: 'https://www.twitter.com' },
  { icon: '/images/icons/instagram.svg', link: 'https://www.instagram.com' },
  { icon: '/images/icons/youtube.svg', link: 'https://www.youtube.com' },
]

const search = ref('')
const router = useRouter()
const route = useRoute()
const categories = useCatgories()

function handleSearch() {
  if (search.value) {
    router.push(`/search?q=${search.value}`)
  }
}

watch(
  () => route.path,
  () => {
    search.value = ''
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <CHeader
      v-model:search="search"
      :categories="categories.categories"
      @submit="handleSearch"
    />
    <main class="content">
      <slot />
    </main>
    <CFooter
      :list-menu="menu"
      :list-copy-right-menu="menuCopyRight"
      :list-social-media="menuSocialMedia"
    />
  </div>
</template>

<style lang="postcss">
.content {
  @apply w-full flex flex-col items-center;
}
</style>
