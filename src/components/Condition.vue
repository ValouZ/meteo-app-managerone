<template>
  <!-- Permet d'attendre que les conditions soient chargé avant de les afficher -->
  <div v-if="weather.condition" class="condition">
    <img :src="weather.condition.icon" alt="weather representation" />
    <p>{{ weather.condition.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["weather"],

  mounted() {
    setTimeout(() => {
      this.setColor();
    }, 500);
  },

  methods: {
    setColor() {
      let conditionText = this.weather.condition.text.toLowerCase();
      console.log(conditionText);

      if (conditionText == "sunny") {
        this.$emit("changeColor", "sunny");
      } else if (conditionText == "clear") {
        this.$emit("changeColor", "clear dark");
      } else if (conditionText == "cloudy" || conditionText == "overcast") {
        this.$emit("changeColor", "cloudy");
      } else if (conditionText == "fog" || conditionText == "mist") {
        this.$emit("changeColor", "fog");
      } else if (
        conditionText == "ice" ||
        conditionText == "snow" ||
        conditionText == "sleet" ||
        conditionText == "blizzard"
      ) {
        this.$emit("changeColor", "snow");
      } else if (conditionText == "rain" || conditionText == "drizzle") {
        this.$emit("changeColor", "rain");
      } else if (conditionText == "thunder" || conditionText == "thunderly") {
        this.$emit("changeColor", "thunder");
      }

      // case "clear":
      //   break;
      // case "cloudy" || "overcast":
      //   this.$emit("changeColor", "cloud");
      //   break;
      // case "fog" || "mist":
      //   this.$emit("changeColor", "fog");
      //   break;
      // case "ice" || "snow" || "sleet" || "blizzard":
      //   this.$emit("changeColor", "snow");
      //   break;
      // case "rain" || "drizzle":
      //   this.$emit("changeColor", "rain");
      //   break;
      // case "thunder" || "thunderly":
      //   this.$emit("changeColor", "thunder dark");
      //   break;
    },
  },
};
</script>
