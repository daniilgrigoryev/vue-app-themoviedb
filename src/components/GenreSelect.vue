<template>
  <el-select v-model="value" placeholder="31" :change="onChangeSelect()">
    <el-option
      v-for="(genre, index) in allGenres"
      :key="index"
      :label="genre.name"
      :value="{id: genre.id, name: genre.name}"
    ></el-option>
  </el-select>
</template>


<script>
export default {
  name: "GenreSelect",
  data() {
    return {
      value: {},
      currentPage: 1,
    }
  },
  computed: {
    allGenres() {
      return this.$store.state.genres
    },
  },
  created() {
    this.$store.dispatch("GET_GENRES")  
  },
  methods: {
    onChangeSelect: function() {
      // this.$router.push({
      //   path: `/movies/${this.value.id}/genre/${this.value.name}`,
      // })
    },
  },
}
</script>

<style scoped>
.genreSelect input.el-input__inner {
  border: 1px solid #409eff !important;
}
</style>
