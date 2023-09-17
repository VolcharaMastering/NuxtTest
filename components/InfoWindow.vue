<template>
  <div class="window-block">
    <h2 class="info-title">{{ label }}</h2>
    <div class="info-window">
      <div
        v-if="label === 'Result'"
        class="info-element"
        v-for="item in response"
      >
        <h3 v-if="item.name">
          Card of <em>{{ item.name }}</em>
        </h3>
        <p v-if="item.email">
          User Email: <em>{{ item.email }}</em>
        </p>
        <p v-if="item.name">
          User Name: <em>{{ item.name }}</em>
        </p>
        <p v-if="item._id">
          User ID is <em>{{ item._id }}</em>
        </p>
      </div>
      <div v-else class="info-element" v-for="item in response">
        <p>Data: {{ item }}</p>
      </div>
      <!-- <p v-if="response.token">User token is <em>{{ response.token }}</em></p> -->
    </div>
  </div>
</template>

<script setup>
const myStore = useMyStore();
const { serverAnswer } = storeToRefs(myStore);
const response = serverAnswer;
const props = defineProps({
  label: String,
});
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
  padding: 10px;
}
.info-title {
  font-size: 15px;
  font-weight: bold;
}
</style>
