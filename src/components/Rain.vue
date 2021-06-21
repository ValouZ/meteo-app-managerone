<template>
  <section class="rain">
    <h1>PLUIE</h1>
    <ul>
      <li v-for="d in data" :key="d">
        {{ d.probarain }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
