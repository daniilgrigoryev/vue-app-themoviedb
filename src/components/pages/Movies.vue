<template>
  <LayoutDefault>
    <MoviesList></MoviesList>
  </LayoutDefault>
</template>


<script>
import LayoutDefault from "../layouts/LayoutDefault.vue"
import MoviesList from "../MoviesList.vue"

export default {
  name: "Main",
  data() {
    return {}
  },
  components: {
    LayoutDefault,
    MoviesList,
  },
}
</script>
