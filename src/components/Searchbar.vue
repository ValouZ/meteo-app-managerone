<template>
  <div class="searchbar">
    <input
      v-on:keyup.enter="searchWeather(city), $event.target.blur()"
      type="text"
      placeholder="Type a city"
      v-model="city"
    />
    <button v-on:click="searchWeather(city)">
      <LoupeIcon />
    </button>
  </div>
</template>

<script>
import LoupeIcon from './icon/LoupeIcon.vue'
export default {
  components: {
    LoupeIcon,
  },

  data() {
    return {
      city: '',
    }
  },

  methods: {
    searchWeather(city) {
      this.$store.dispatch('setWeather', city)
    },
  },
}
</script>

<style lang="scss" scoped></style>
