<template>
  <div class="home">
    <Searchbar />
    <WeatherCard />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherCard from '@/components/WeatherCard.vue'
import Searchbar from '../components/Searchbar.vue'
export default {
  name: 'Home',
  components: {
    WeatherCard,
    Searchbar,
  },

  // beforeCreate() {
  //   //actions
  //   this.$store.dispatch('setWeather', 'Montesson')
  //   // this.$store.dispatch('setForecast', 'Montesson', 9)
  // },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
