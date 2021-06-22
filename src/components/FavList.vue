<template>
  <div class="fav-list">
    <ul>
      <li v-for="(city, i) in cities" :key="i">
        <!-- <p class="city-name">{{ city }}</p> -->
        <WeatherCard :minimize='true' :city='city'/>
        <button v-on:click="deleteFav(i)" class="delete-fav">
          <cross-icon />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue'
import CrossIcon from '@/components/icon/CrossIcon.vue'
export default {
  components: {
    CrossIcon,
    WeatherCard,
  },
  computed: {
    cities() {
      return this.$store.getters.getFavCities
    },
  },
  methods: {
    deleteFav(index) {
      this.$store.dispatch('removeFavCity', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.delete-fav {
  height: 26px;
  width: 26px;
}
</style>
