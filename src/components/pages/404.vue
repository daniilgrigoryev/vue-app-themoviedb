<template>
  <div class="center">
    <div>
      <p class="txt404">404</p>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  font-size: 34px;
  color: #fff;
}
.center p {
  line-height: 0;
}
.txt404 {
  font-size: 100px;
  line-height: 100%;
}
</style>

<script>
export default {
  name: "404",
  data() {
    return {
      message: "Page not found!",
    }
  },
}
</script>
