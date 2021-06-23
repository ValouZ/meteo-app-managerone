<template>
  <!-- Permet d'attendre que les conditions soient chargé avant de les afficher -->
  <div v-if="weather.condition" class="condition">
    <img :src="weather.condition.icon" alt="weather representation" />
    <p>{{ weather.condition.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["weather"],
};
</script>

<style lang="scss" scoped>
</style>