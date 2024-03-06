<script lang="ts" setup>
const route = useRoute()
const { slug } = route.params
</script>
<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    c -> {{ slug }}
  </div>
</template>
