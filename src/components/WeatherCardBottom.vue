<template>
  <div class="wcb">
    <WeatherCardBottomElement
      class="last-update"
      :title="'Last update'"
      :content="`${w_lu}`"
    />
    <WeatherCardBottomElement
      class="wind"
      :title="'Wind'"
      :content="`${weather.wind_dir}. ${weather.wind_kph} km/h`"
    />
    <WeatherCardBottomElement
      class="cloud"
      :title="'Cloud cover'"
      :content="`${weather.cloud}% cloud cover`"
    />
    <WeatherCardBottomElement
      class="feelslike"
      :title="'Feelslike'"
      :content="`${weather.feelslike_c}°C`"
    />
  </div>
</template>

<script>
import WeatherCardBottomElement from "./WeatherCardBottomElement.vue";
export default {
  components: {
    WeatherCardBottomElement,
  },
  props: ["weather"],

  mounted() {
    let that = this;
    setTimeout(() => {
      this.w_lu = that.lastUpdate(this.weather.last_updated);
    }, 1000);
  },

  data() {
    return {
      w_lu: "", // weather last update
    };
  },

  methods: {
    lastUpdate(x) {
      let date = x.split(" ");
      return this.getDayLastUpdate(x) + " " + date[1];
    },
    getDayLastUpdate(x) {
      let date = new Date(x);
      return this.getDayString(date.getDay());
    },
    getDayString(value) {
      switch (value) {
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
        case 7:
          return "Sunday";
        default:
          return "-";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>