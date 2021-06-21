<template>
  <div class="home">
    <h1>{{ city.name }}</h1>
    <Temperature />
  </div>
</template>

<script>
import Cities from "./Cities.vue";
import Rain from "./Rain.vue";
import Temperature from "./Temperature.vue";
import Weather from "./Weather.vue";
import Today from "./Today.vue";
export default {
  components: {
    Temperature,
    // Cities,
    // Rain,
    // Weather,
    // Today,
  },
  data: function() {
    return {
      // days14: [],
      // today: {},
    };
  },

  beforeCreate() {
    // let days14 = [];
    // let today = {};
    // await fetch(
    //   "https://api.meteo-concept.com/api/forecast/daily?token=761792f106a626542d2e46b45532f9bf0d319087043efb8006b11e91a090ff65&insee=78350"
    // )
    //   .then((response) => response.json())
    //   .then(function(data) {
    //     console.log("----- 14 jours à venir -----");
    //     console.log(data.forecast);
    //     data.forecast.forEach((e) => {
    //       days14.push(e);
    //     });
    //   });
    // this.days14 = days14;

    // await fetch(
    //   "https://api.meteo-concept.com/api/forecast/daily/0?token=761792f106a626542d2e46b45532f9bf0d319087043efb8006b11e91a090ff65&insee=78350"
    // )
    //   .then((response) => response.json())
    //   .then(function(data) {
    //     console.log(data.forecast);
    //     today = data.forecast;
    //   });
    // this.today = today;

    // let weather;

    // await fetch(
    //   "http://api.weatherapi.com/v1/current.json?key=50a492d81e884b81844173743211906&q=Montesson&aqi=no"
    // )
    //   .then((response) => response.json())
    //   .then(function(data) {
    //     weather = data;
    //   });
  },

  computed: {
    city() {
      return this.$store.getters.getLocation;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
