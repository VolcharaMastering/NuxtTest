<template>
  <div class="window-block">
    <h2 class="info-title">{{ text }}</h2>
    <div class="info-window"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Enter",
    };
  },
};
</script>

<style scoped>
.window-block {
  display: flex;
  width: 30%;
  height: 400px;
  flex-direction: column;
  margin: 0;
  box-sizing: border-box;
}
.info-window {
  width: 100%;
  height: 100%;
  background-color: #f3f2f1;
  border-radius: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  margin: 0;
}
.info-title {
  font-size: 15px;
  font-weight: bold;
}
</style>
