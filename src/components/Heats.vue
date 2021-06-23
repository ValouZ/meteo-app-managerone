<template>
  <div class="heats">
    <h3 class="heat">{{ weather.temp_c }}°C</h3>
    <MinMax />
  </div>
</template>

<script>
import MinMax from "./MinMax.vue";
export default {
  components: {
    MinMax,
  },
  props: ["weather"],
};
</script>

<style lang="scss" scoped>
</style>