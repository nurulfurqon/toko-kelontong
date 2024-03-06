<script lang="ts" setup>
const image = {
  png: 'https://res.cloudinary.com/furqon/image/upload/f_auto,q_auto/v1/suitmedia/images/hero/wid2r4exnss9qthtb6pf',
  webp: 'https://res.cloudinary.com/furqon/image/upload/f_auto,q_auto/v1/suitmedia/images/hero/pm8qfrkgq7cr2eia5cxu',
}
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__wrapper">
      <div class="home-hero__content">
        <h2 class="home-hero__title">
          One More Friend
          <span class="home-hero__subtitle">Thousands More Fun!</span>
        </h2>
        <p class="home-hero__text">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div class="home-hero__box-button">
          <CButton variant="outline">
            View Intro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 ml-2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#A)">
                <path
                  d="M12 1.875c-2.003 0-3.96.594-5.625 1.706S3.412 6.275 2.646 8.125s-.967 3.886-.576 5.85 1.355 3.768 2.771 5.184 3.22 2.38 5.184 2.771 4 .19 5.85-.576 3.431-2.064 4.544-3.729 1.706-3.623 1.706-5.625c-.003-2.684-1.071-5.258-2.969-7.156S14.684 1.878 12 1.875zm0 18c-1.557 0-3.08-.462-4.375-1.327s-2.304-2.095-2.9-3.534-.752-3.022-.448-4.55S5.33 7.533 6.432 6.432s2.505-1.851 4.032-2.155 3.111-.148 4.55.448 2.669 1.605 3.534 2.9 1.327 2.818 1.327 4.375c-.002 2.088-.833 4.09-2.309 5.566S14.088 19.873 12 19.875zM15.75 12c0 .181-.044.359-.127.52s-.205.298-.353.402l-3.75 2.625c-.169.118-.366.187-.572.201s-.41-.03-.593-.125-.335-.238-.442-.414-.163-.378-.163-.584v-5.25c0-.206.056-.408.163-.583s.26-.319.442-.414.388-.138.593-.125.403.083.572.201l3.75 2.625c.148.104.269.242.353.402s.127.339.127.52z"
                  fill="#003459"
                />
              </g>
              <defs>
                <clipPath id="A">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </CButton>
          <CButton>Explore Now</CButton>
        </div>
      </div>
      <div class="home-hero__box-image">
        <picture>
          <source type="image/webp" :srcset="image.webp" />
          <source type="image/png" :srcset="image.png" />
          <img
            :src="image.png"
            alt="One More Friend Thousands More Fun!"
            class="home-hero__image"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.home-hero {
  @apply w-full relative flex flex-col items-center bg-pink-lady-100;
  &__wrapper {
    @apply w-full min-h-screen max-w-[1212px] py-[60px] px-4 flex items-center relative;
  }

  &__content {
    @apply w-full max-w-[480px] flex flex-col items-start space-y-9;
  }

  &__title {
    @apply text-6xl font-extrabold text-prussian-blue-800;
  }

  &__subtitle {
    @apply text-5xl font-bold text-prussian-blue-800;
  }

  &__text {
    @apply text-base font-medium text-[#242b33];
  }

  &__box-image {
    @apply flex justify-center flex-1 absolute right-20 bottom-0;
  }

  &__image {
    @apply w-[484px] h-auto object-cover;
  }

  &__box-button {
    @apply flex items-center space-x-5;
  }
}
</style>
