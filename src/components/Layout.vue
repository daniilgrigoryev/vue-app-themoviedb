<template>
  <section class="wrapper">
    <Header></Header>
    <section id="main"></section>
  </section>
</template>

<script>
import Header from "./Header.vue"

export default {
  name: "Layout",
  data() {
    return {}
  },
  components: {
    Header,
  },
}
</script>


