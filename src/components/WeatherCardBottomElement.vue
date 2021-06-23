<template>
  <div class="wcb-element">
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style lang="scss" scoped>
</style>