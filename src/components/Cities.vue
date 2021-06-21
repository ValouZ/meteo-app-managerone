<template>
  <section class="cities">
    <h1>Recherche Ville</h1>
    <div class="form">
      <input type="text" placeholder="Nom de ville" v-model="city" />
      <button v-if="city != ''" v-on:click="getNumberOfCity">
        Rechercher
      </button>
    </div>

    <p v-if="searched">
      <template v-if="numberOfCity <= maxNumberOfCity">
        {{ numberOfCity }} ville(s) trouvée(s) contenant '{{ oldCity }}'
        <Weather :data="data" />
      </template>

      <template v-else>
        Il y a beaucoup trop de ville la mon reuf
      </template>
    </p>
  </section>
</template>

<script>
import Weather from "./Weather.vue";

export default {
  components: { Weather },
  props: ["data"],
  data() {
    return {
      city: "",
      oldCity: "",
      numberOfCity: "",
      maxNumberOfCity: 5,
      searched: false,
    };
  },

  methods: {
    // Récupérer le nombre de ville contenant le nom choisi
    async getNumberOfCity() {
      let numberOfCity = 0;
      let city = this.city;
      let maxNumberOfCity = this.maxNumberOfCity;
      await fetch(
        "https://api.meteo-concept.com/api/location/cities?token=761792f106a626542d2e46b45532f9bf0d319087043efb8006b11e91a090ff65&search=" +
          city
      )
        .then((response) => response.json())
        .then(function(data) {
          // console.log(data.cities);
          numberOfCity = data.cities.length;
          if (numberOfCity <= maxNumberOfCity) {
            data.cities.forEach((c) => {
              console.log(c);
            });
          }
        });
      this.numberOfCity = numberOfCity;
      this.oldCity = city;
      this.searched = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
