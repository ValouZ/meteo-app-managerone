<template>
  <section class="general-content" :class="linearBgColor()">
    <Header />
    <router-view />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  async beforeCreate() {
    //actions
    await this.$store.dispatch("setWeather", "Montesson");
    // this.$store.dispatch('setForecast', 'Montesson')
  },

  data() {
    return {
      bgColor: "",
    };
  },

  methods: {
    linearBgColor() {
      let classes = this.$store.getters.getBgColor.split(" ").filter((x) => {
        return x != "dark";
      });
      return classes[0] + "-linear";
    },
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
