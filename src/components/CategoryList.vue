<template>
  <select name="CategoryList">
    <option v-for="(genre, index) in allGenres" :key="index">{{genre.name}}</option>
  </select>
</template>


<script>
export default {
  name: "CategoryList",
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
