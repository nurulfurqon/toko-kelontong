<script lang="ts" setup>
import type { MenuItem, SocialMedia } from '~/types/general.types'

const props = withDefaults(
  defineProps<{
    /** List of menu */
    listMenu?: MenuItem[]
    /** List of social media */
    listSocialMedia?: SocialMedia[]
    /** List of copy right menu */
  }>(),
  {
    listMenu: () => [],
    listSocialMedia: () => [],
  },
)
</script>

<template>
  <footer class="c-footer">
    <div class="c-footer__body">
      <div class="c-footer__box-menu">
        <ul class="c-footer__menu">
          <li v-for="(menu, i) in listMenu" :key="`menu-footer-${i}`">
            <NuxtLink :to="menu.link" class="c-footer__menu-item">
              {{ menu.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="w-full h-[1px] bg-gray-300" />
      <div class="c-footer__box-copyright">
        <div class="c-footer__box-copyright-text">
          <p>© 2024 Kelontong. All rights reserved.</p>
        </div>
        <ul class="c-footer__social-media">
          <li
            v-for="(socialMedia, i) in listSocialMedia"
            :key="`social-media-${i}`"
          >
            <a :href="socialMedia.link" target="_blank">
              <img :src="socialMedia.icon" alt="Social Media" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.c-footer {
  @apply w-full relative flex flex-col items-center bg-chestnut-50  rounded-t-[40px];

  &__body {
    @apply w-full max-w-[1212px] pt-2 px-5 md:px-4 md:pt-7 flex flex-col items-center justify-between;
  }

  &__box-menu {
    @apply w-full flex flex-col md:flex-row md:items-center py-8 md:py-10;
  }

  &__menu {
    @apply flex flex-1 flex-col md:flex-row md:items-center justify-start space-y-2 md:space-y-0 md:space-x-[60px];

    &-item {
      @apply text-sm md:text-base font-medium text-gray-800 hover:underline;
    }
  }

  &__social-media {
    @apply flex items-center justify-end space-x-10 order-1 mb-8 md:mb-0 md:order-2;
    img {
      @apply w-5 h-5 object-cover;
    }
  }

  &__box-copyright {
    @apply w-full flex flex-col md:flex-row items-center py-10;

    &-text {
      @apply flex-1 flex justify-start order-2 md:order-1;
      p {
        @apply text-sm font-medium text-gray-500;
      }
    }
  }
}
</style>
