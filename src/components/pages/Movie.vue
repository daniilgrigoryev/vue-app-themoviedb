<template>
  <LayoutDefault>
    <MovieItem></MovieItem>
  </LayoutDefault>
</template>


<script>
import LayoutDefault from "../layouts/LayoutDefault.vue"
import MovieItem from "../MovieItem.vue"

export default {
  name: "Movie",
  data() {
    return {}
  },
  components: {
    LayoutDefault,
    MovieItem,
  },
}
</script>
