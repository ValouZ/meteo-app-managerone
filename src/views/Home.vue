<template>
  <div class="home">
    <Meteo />
  </div>
</template>

<script>
// @ is an alias to /src
import Meteo from "@/components/Meteo.vue";

export default {
  name: "Home",
  components: {
    Meteo,
  },

  beforeCreate() {
    //actions
    this.$store.dispatch("setWeather", "Montesson");
  },
};
</script>
