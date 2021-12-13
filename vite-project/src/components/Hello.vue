<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="label">{{ msg }}</h1>
</template>

<style scoped>
.label {
  margin: 0 0.5em;
  font-weight: bold;
  color: darkcyan;
}
</style>
