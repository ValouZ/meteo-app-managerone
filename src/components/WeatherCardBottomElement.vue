<template>
  <div class="wcb-element">
    <h4 class="wcb-element__title">{{ title }}</h4>
    <p class="wcb-element__content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style lang="scss" scoped>
</style>