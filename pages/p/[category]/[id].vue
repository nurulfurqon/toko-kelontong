<script lang="ts" setup>
const route = useRoute()
const { category, id } = route.params
</script>
<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    p -> {{ category }} -> {{ id }}
  </div>
</template>
