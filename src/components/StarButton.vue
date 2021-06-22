<template>
  <div class="star-button">
    <button v-on:click="addFav()" class="star-button__button">
      <star-icon />
    </button>
  </div>
</template>

<script>
import StarIcon from './icon/StarIcon.vue'
export default {
  components: { StarIcon },
  methods: {
    addFav() {
      let city = this.$store.getters.getLocation.name
      this.$store.dispatch('addFavCity', city)
    },
  },
}
</script>

<style lang="scss" scoped></style>
