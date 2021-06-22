<template>
  <div class="fav-list">
    <h1 v-if="cities.length < 2" class="fav-city">Favory City</h1>
    <h1 v-else class="fav-city">Favory Cities</h1>
    <ul>
      <li v-for="(city, i) in cities" :key="i">
        <WeatherCard
          @openCard="openCard"
          :favMinimize="minimize"
          :favCity="city"
        />
        <button v-on:click="deleteFav(i)" class="delete-fav">
          <cross-icon />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue'
import CrossIcon from '@/components/icon/CrossIcon.vue'
export default {
  components: {
    CrossIcon,
    WeatherCard,
  },
  data() {
    return {
      minimize: true,
    }
  },
  computed: {
    cities() {
      return this.$store.getters.getFavCities
    },
  },
  methods: {
    deleteFav(index) {
      this.$store.dispatch('removeFavCity', index)
    },

    // Cache toutes les cartes pour afficher uniquement celle cliqué
    async openCard(childCity) {
      console.log('OUVERTURE CARTE ' + childCity)
      // Mémoire du tableau des villes
      let tempCities = this.cities
      // On supprime le tableau des villes favorites -> permet de fermer celle ouverte
      await this.$store.dispatch('drainFavCities')

      // Puis on ajoute toutes les villes une à une avec le bon état !
      for (let i = 0; i < tempCities.length; i++) {
        this.minimize = true
        // Si la ville actuelle de la boucle est celle cliqué, on ne la minimisera pas !!!
        if (tempCities[i] == childCity) {
          this.minimize = false
        }

        // On ajoute à nouveau la ville au tableau des villes favorites
        await this.$store.dispatch('addFavCity', tempCities[i])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.delete-fav {
  height: 26px;
  width: 26px;
}
</style>
