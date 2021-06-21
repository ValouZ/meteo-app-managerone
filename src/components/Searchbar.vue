<template>
  <div class="searchbar">
    <input type="text" placeholder="Type a city" v-model="city" />
    <button v-on:click='searchWeather(city)'>
      <loupe />
    </button>
  </div>
</template>

<script>
import Loupe from "./Loupe.vue";
export default {
  components: {
    Loupe,
  },

  data() {
    return {
      city: "",
    };
  },

  methods: {
    searchWeather(city) {
      this.$store.dispatch("setWeather", city);
    }
  },
};
</script>

<style lang="scss" scoped></style>
