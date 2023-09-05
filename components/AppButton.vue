<template>
  <button class="button">{{ buttonLabel }}</button>
</template>

<script>
export default {
  props: {
    buttonLabel: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: "tempButton",
    };
  },
};
</script>

<style scoped>
.button {
  width: 140px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: black;
  color: white;
  transition: 0.3s;
}
</style>
