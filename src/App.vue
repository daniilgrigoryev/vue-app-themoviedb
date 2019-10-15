<template>
  <div id="app">
    <CategoryList></CategoryList>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import CategoryList from "./components/CategoryList"

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    CategoryList,
  },
}
</script>
