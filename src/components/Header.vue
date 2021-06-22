<template>
  <header>
    <router-link to="/"><h1 class="title">Weather app</h1></router-link>
    <router-link to="/fav"><star-icon /></router-link>
  </header>
</template>

<script>
import StarIcon from './icon/StarIcon.vue'
export default {
  components: { StarIcon },
}
</script>

<style lang="scss" scoped></style>
