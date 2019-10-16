<template>
  <el-select v-model="value" placeholder="жанры" class="genreSelect">
    <el-option
      v-for="(genre, index) in allGenres"
      :key="index"
      :label="genre.name"
      :value="genre.id"
    ></el-option>
  </el-select>
</template>


<script>
export default {
  name: "GenreSelect",
  data() {
    return {}
  },
  computed: {
    allGenres() {
      return this.$store.state.genres
    },
  },
  created() {
    this.$store.dispatch("GET_GENRES")
  },
}
</script>

<style scoped>
.genreSelect input.el-input__inner {
  border: 1px solid #409eff !important;
}
</style>
