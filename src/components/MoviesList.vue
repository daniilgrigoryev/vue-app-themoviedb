<template>
  <div class="container">
    <div class="card" v-for="(movie, index) in allMovies" :key="index">
      <router-link :to="`/movie/${movie.id}`">
        <div class="img">
          <img :src="img(movie.poster_path)" alt />
        </div>
      </router-link>

      <div class="content">
        <el-rate :max="10" disabled v-model="movie.vote_average" show-score text-color="#ff9900"></el-rate>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line prefer-destructuring
const API_IMAGES = process.env.API_IMAGES

export default {
  name: "Movies",
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    allMovies() {
      return this.$store.state.movies
    },
  },
  created() {
    this.changeRoute()
  },
  watch: {
    $route: "changeRoute",
  },
  methods: {
    changeRoute: function() {
      this.$store.dispatch("GET_MOVIES", {
        id: this.$route.params.genres || 16,
      })
      // $store.commit("SET_MOVIES")
    },
    img: function(data) {
      if (data) {
        return `${API_IMAGES}t/p/w300${data}`
      } else {
        return `../assets/images/no-image.svg`
      }
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: flex-end;
  flex-flow: row wrap;
}
.card {
  margin: 1.5%;
  background: #fff;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 300px;
}
.content {
  margin: 5px 0;
}
.img {
  max-width: 100%;
  height: 450px;
  width: 100%;
  background-color: #000;
  overflow: hidden;
}
.img img {
  display: block;
}
</style>
