<template>
  <div class="home">
    <Searchbar />
    <WeatherCard />
    <MoreDays />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherCard from "@/components/WeatherCard.vue";
import Searchbar from "@/components/Searchbar.vue";
import MoreDays from "@/components/MoreDays.vue";
export default {
  name: "Home",
  components: {
    WeatherCard,
    Searchbar,
    MoreDays,
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
