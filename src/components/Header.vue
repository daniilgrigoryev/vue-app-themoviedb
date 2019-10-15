<template>
  <header class="header">
    <div class="wrapper">
      <div class="container">
        <a href="#" class="logo">
          <div class="img"></div>
          <span class="txt">Movie Loader</span>
        </a>
        <GenreSelect></GenreSelect>
      </div>
    </div>
  </header>
</template>

<script>
import GenreSelect from "./GenreSelect.vue"

export default {
  name: "Header",
  data() {
    return {}
  },
  components: {
    GenreSelect,
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.header {
  padding: 10px 0;
  background: #ebeef5;
  -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  box-sizing: border-box;
  z-index: 1;
  height: 60px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo .txt {
  margin-left: 15px;
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
}
.logo .img {
  height: 40px;
  width: 40px;
  background-image: url("../assets/images/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  outline: 1px solid;
}
</style>
