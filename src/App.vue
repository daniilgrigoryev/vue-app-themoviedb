<template>
  <div id="app">
    <Layout></Layout>

    <!-- <CategoryList></CategoryList> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Layout from "./components/Layout"

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    Layout,
  },
}
</script>
