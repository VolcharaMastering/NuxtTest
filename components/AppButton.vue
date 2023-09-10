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
};
</script>

<style scoped>
.button {
  width: 140px;
  padding: 10px 15px;
  background: rgba(249, 249, 249, 0.7);
  color: black;
  border: 3px solid rgba(108, 104, 104, 0.4);
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: white;
  transition: 0.5s;
}
</style>
