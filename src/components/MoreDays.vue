<template>
  <template v-if="forecast.forecast">
    <div
      v-for="(day, i) in forecast.forecast.forecastday"
      :key="i"
      class="more-days"
      :class="bgColor"
    >
      <h4 class="day">{{ getDayString(day.date) }}</h4>
      <div class="icon-rain">
        <img :src="day.day.condition.icon" class="icon" />
        <p class="rain-data" v-if="day.day.daily_chance_of_rain > 0">
          {{ day.day.daily_chance_of_rain }} %
        </p>
      </div>
      <p>{{ day.day.mintemp_c }}°C</p>
      <p>{{ day.day.maxtemp_c }}°C</p>
    </div>
  </template>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.getters.getCurrentWeather;
    },
    forecast() {
      return this.$store.getters.getForecast;
    },
    bgColor() {
      return this.$store.getters.getBgColor;
    },
  },

  methods: {
    getDayValue(day) {
      let date = new Date(day);
      return date.getDay();
    },
    getDayString(day) {
      console.log(day);
      let value = this.getDayValue(day);
      switch (value) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return "-";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>