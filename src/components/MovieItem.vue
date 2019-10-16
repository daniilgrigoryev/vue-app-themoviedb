<template>
  <div class="container">
    <div class="movie" v-if="isLoading()">
      <div class="img">
        <img :src="img(MovieDetail.backdrop_path)" alt />
      </div>
      <div class="content">
        <h2>{{MovieDetail.original_title}}</h2>
        <p>{{MovieDetail.overview}}</p>

        <div class="trailer">
          <iframe
            width="100%"
            height="100%"
            :src="'https://www.youtube.com/embed/'+MovieTrailer[0].key"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.movie {
  background: #fff;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.img {
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 50px;
}
.img img {
  display: block;
}
.content {
  padding: 10px;
}
.trailer {
  height: 500px;
}
</style>

<script>
const API_IMAGES = process.env.API_IMAGES

export default {
  name: "MovieItem",
  data() {
    return {}
  },
  computed: {
    MovieDetail() {
      return this.$store.state.movie
    },
    MovieTrailer() {
      return this.$store.state.trailer
    },
  },
  created() {
    this.$store.dispatch("GET_MOVIE", {
      id: this.$route.params.id,
    })
    this.$store.dispatch("GET_TRAILER", {
      id: this.$route.params.id,
    })
  },
  methods: {
    isLoading: function() {
      if (this.MovieDetail.id == this.$route.params.id) {
        return true
      } else {
        return false
      }
    },
    img: function(data) {
      if (data) {
        return `${API_IMAGES}t/p/w500${data}`
      } else {
        return `../assets/images/no-image.svg`
      }
    },
  },
}
</script>
