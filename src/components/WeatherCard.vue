<template>
  <section class="weather-card">
    <section class="main">
      <div class="city">
        <h2 class="city-name">{{ city.name }}</h2>
        <StarButton />
      </div>
      <!-- Permet d'attendre que les conditions soient chargé avant de les afficher -->
      <div v-if="weather.condition" class="condition">
        <img :src="weather.condition.icon" alt="weather representation" />
        <p>{{ weather.condition.text }}</p>
      </div>

      <div class="heats">
        <h3 class="heat">{{ weather.temp_c }}°C</h3>
        <MinMax />
      </div>

      <ArrowDown />
    </section>
  </section>

  <!-- <p class="wind">Vent : {{ weather.wind_kph }} km/h</p> -->
  <!-- <p class="last-update">{{ lastUpdate }}</p> -->
</template>

<script>
import StarButton from './StarButton.vue'
import ArrowDown from './ArrowDown.vue'
import MinMax from './MinMax.vue'
export default {
  components: { StarButton, ArrowDown, MinMax },

  mounted() {
    setTimeout(() => {
      // console.log(this.weather)
    }, 1000)
  },

  props: ['data', 'minimize', 'city'],

  computed: {
    weather() {
      return this.$store.getters.getCurrentWeather
    },
    lastUpdate() {
      // let lastUpdate = this.weather.last_updated;
      let date = lastUpdate.split(' ')
      return this.getDayLastUpdate() + ' ' + date[1]
    },
    city() {
      return this.$store.getters.getLocation
    },
  },

  methods: {
    getDayLastUpdate() {
      let date = new Date(this.weather.last_updated)
      return this.getDayString(date.getDay())
    },

    getDayString(value) {
      switch (value) {
        case 1:
          return 'Lundi'
        case 2:
          return 'Mardi'
        case 3:
          return 'Mercredi'
        case 4:
          return 'Jeudi'
        case 5:
          return 'Vendredi'
        case 6:
          return 'Samedi'
        case 7:
          return 'Dimanche'
        default:
          return 'No a day'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
