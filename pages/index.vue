<template>
  <section class="main">
    <img
      src="../assets/images/fon_ai.png"
      alt="background image"
      class="background back_top"
    />
    <img
      src="../assets/images/fon_man.png"
      alt="background image"
      class="background back_center"
    />
    <img
      class="background back_bottom"
      src="../assets/images/fon_center.png"
      alt="background image"
    />
    <InfoWindow label="Result" />
    <InfoWindow label="Full Api unswer" />
  </section>
</template>

<script setup></script>

<style scoped>
.main {
  position: relative;
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.background {
  position: absolute;
  width: 20%;
  opacity: 20%;
}
.back_top {
  top: 10px;
  right: 0;
}
.back_center {
  top: 40%;
  width: 10%;
  right: 45%;
}

.back_bottom {
  left: 0;
  top: 30vh;
}
</style>
