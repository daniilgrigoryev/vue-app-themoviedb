<template>
  <section class="wrapper">
    <Header></Header>
    <section id="main">
      <slot />
    </section>
  </section>
</template>

<script>
import Header from "../Header.vue"

export default {
  name: "LayoutDefault",
  data() {
    return {}
  },
  components: {
    Header,
  },
}
</script>


