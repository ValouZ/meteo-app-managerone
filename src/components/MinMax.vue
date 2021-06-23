<template>
  <div v-if="forecast.forecast" class="min-max">
    <div class="min">Min {{ minTemp() }}°C</div>
    <div class="max">Max {{ maxTemp() }}°C</div>
    <!-- {{ forecast.forecast.forecastday[0].day.maxtemp_c }} -->
  </div>
</template>

<script>
export default {
  // mounted() {
  //   setTimeout(() => {
  //     console.log(this.forecast)
  //   }, 1000)
  // },

  computed: {
    forecast() {
      return this.$store.getters.getForecast;
    },
  },

  methods: {
    minTemp() {
      return this.forecast.forecast.forecastday[0].day.mintemp_c;
    },
    maxTemp() {
      return this.forecast.forecast.forecastday[0].day.maxtemp_c;
    },
  },
};
</script>

<style lang="scss" scoped></style>
