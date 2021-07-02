<template>
  <section v-if="minimize" v-on:click="openCard()" class="weather-card">
    <section class="main">
      <h2 class="city-name">
        {{ favCity }}
      </h2>
    </section>
  </section>

  <section v-else class="weather-card" :class="bgColor">
    <div v-if="fav" class="already-fav">Already on favorites</div>
    <section class="main">
      <div class="city">
        <h2 class="city-name">{{ city.name }}</h2>
        <!-- si favCity existe, on est sur la page des favoris et on ne veux pas l'afficher -->
        <StarButton v-if="!favCity" @alreadyFav="alreadyFav" :class="bgColor" />
      </div>

      <Condition :weather="weather" />
      <Heats :weather="weather" />

      <ArrowDown
        v-on:click="isHidden = !isHidden"
        :class="{ rotate: !isHidden }"
      />
    </section>

    <section class="more" :class="{ hidden: isHidden }">
      <WeatherCardBottom :weather="weather" />
    </section>
  </section>
</template>


<script>
import StarButton from "./StarButton.vue";
import ArrowDown from "./ArrowDown.vue";
import Condition from "./Condition.vue";
import Heats from "./Heats.vue";
import WeatherCardBottom from "./WeatherCardBottom.vue";

export default {
  components: { StarButton, ArrowDown, Condition, Heats, WeatherCardBottom },

  props: ["data", "favMinimize", "favCity"],

  data() {
    return {
      minimize: this.favMinimize,
      fav: false,
      isHidden: true,
    };
  },

  computed: {
    weather() {
      return this.$store.getters.getCurrentWeather;
    },
    city() {
      return this.$store.getters.getLocation;
    },
    bgColor() {
      return this.$store.getters.getBgColor;
    },
  },

  methods: {
    openCard() {
      this.$emit("openCard", this.favCity);
      // this.minimize = false
      this.$store.dispatch("setWeather", this.favCity);
    },
    alreadyFav(state) {
      this.fav = state;
    },
  },
};
</script>

<style lang="scss" scoped></style>
