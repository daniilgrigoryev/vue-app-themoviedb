<template>
  <section class="wrapper">
    <Header></Header>
    <section id="main">
      <Movies></Movies>
    </section>
  </section>
</template>

<script>
import Header from "./Header.vue"
import Movies from "./Movies.vue"

export default {
  name: "Layout",
  data() {
    return {}
  },
  components: {
    Header,
    Movies,
  },
}
</script>


