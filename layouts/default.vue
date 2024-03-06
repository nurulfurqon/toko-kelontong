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

const categories = useCatgories()
</script>

<template>
  <div>
    <CHeader :categories="categories.categories" />
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
