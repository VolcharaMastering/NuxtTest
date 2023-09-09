<template>
  <div class="window-block">
    <h2 class="info-title">{{ label }}</h2>
    <div class="info-window">
      <div
        v-if="label === 'Result'"
        class="info-element"
        v-for="item in response"
      >
        <h3 v-if="item.name">Card of {{ item.name }}</h3>
        <p v-if="item.email">User Email: {{ item.email }}</p>
        <p v-if="item.name">User Name: {{ item.name }}</p>
        <p v-if="item._id">User ID is {{ item._id }}</p>
      </div>
      <div v-else class="info-element" v-for="item in response">
        <p>User {{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Array,
      default: function () {
        return [];
      },
    },
    label: {
      type: String,
      default: "",
    },
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
