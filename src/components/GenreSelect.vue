<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Жанры
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(genre, index) in allGenres" :key="index">
        <router-link :to="`/movies/${genre.id}`">{{genre.name}}</router-link>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>


<script>
export default {
  name: "GenreSelect",
  data() {
    return {
      value: 16,
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
}
</script>

<style scoped>
.genreSelect input.el-input__inner {
  border: 1px solid #409eff !important;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
