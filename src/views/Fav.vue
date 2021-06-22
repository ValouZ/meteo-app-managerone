<template>
  <div class="fav">
    <FavList />
  </div>
</template>

<script>
import FavList from '@/components/FavList.vue'
export default {
  components: {
    FavList,
  },
}
</script>

<style lang="scss" scoped>
.fav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
