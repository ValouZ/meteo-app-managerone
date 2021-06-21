<template>
  <div class="home">
    <Header />
    <Searchbar />
    <WeatherCard />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherCard from "@/components/WeatherCard.vue";
import Header from "@/components/Header.vue";
import Searchbar from "../components/Searchbar.vue";
export default {
  name: "Home",
  components: {
    WeatherCard,
    Header,
    Searchbar,
  },

  beforeCreate() {
    //actions
    this.$store.dispatch("setWeather", "New york");
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
