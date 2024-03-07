<script lang="ts" setup>
import { listProducts } from '~/dummy'
</script>
<template>
  <div class="w-full min-h-screen pt-64 flex items-center justify-center">
    <div class="w-[360px]">
      <CCarouselProducts :list-products="listProducts" />
    </div>
  </div>
</template>
