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
      // On récupère le nom de la ville actuellement chargé par l'API
      let city = this.$store.getters.getLocation.name
      // On récupère la liste de tous les favoris
      let favCities = this.$store.getters.getFavCities
      for (let i = 0; i < favCities.length; i++) {
        if (favCities[i] == city) {
          this.$emit('alreadyFav', true)
          return
        }
      }
      this.$emit('alreadyFav', false)
      this.$store.dispatch('addFavCity', city)
    },
  },
}
</script>

<style lang="scss" scoped></style>
