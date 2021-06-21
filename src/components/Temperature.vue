<template>
  <section class="heat">
    <h2>Temperature : {{ weather.temp_c }} °C</h2>
    <p class="wind">Vent : {{ weather.wind_kph }} km/h</p>
    <!-- <p class="last-update">{{ lastUpdate }}</p> -->

    <!-- <img :src="weather.condition.icon" alt="" /> -->
    <p v-if='weather.condition.text'>{{ weather.condition.text }}</p>

    <!-- <ul>
      <li v-for="(d, i) in data" :key="i">
        <h3>{{ getDayString(setDayValue(dayOfTOday)) }}</h3>
        <p>Max : {{ d.tmax }} - Min : {{ d.tmin }}</p>
      </li>
    </ul> -->
  </section>
</template>

<script>
export default {
  beforeCreate() {
    console.log(this.weather);

    // this.dayOfTOday = new Date().getDay() - 1; // -1 car au premier tour on incrémente d'un le jour donc on retombera sur le bon jour
  },

  props: ["data"],

  data() {
    return {
      // dayOfTOday: "",
    };
  },

  computed: {
    weather() {
      return this.$store.getters.getCurrentWeather;
    },
    lastUpdate() {
      // let lastUpdate = this.weather.last_updated;
      let date = lastUpdate.split(" ");
      return this.getDayLastUpdate() + " " + date[1];
    },
  },

  methods: {
    getDayLastUpdate() {
      let date = new Date(this.weather.last_updated);
      return this.getDayString(date.getDay());
    },
    //   setDayValue(day) {
    //     // day = day > 7 ? 1 : day < 1 ? 7 : day++;
    //     if (day > 6) {
    //       day = 1;
    //     } else if (day < 1) {
    //       day = 7;
    //     } else {
    //       day++;
    //     }
    //     this.dayOfTOday = day;
    //     return day;
    //   },

    getDayString(value) {
      switch (value) {
        case 1:
          return "Lundi";
        case 2:
          return "Mardi";
        case 3:
          return "Mercredi";
        case 4:
          return "Jeudi";
        case 5:
          return "Vendredi";
        case 6:
          return "Samedi";
        case 7:
          return "Dimanche";
        default:
          return "No a day";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
