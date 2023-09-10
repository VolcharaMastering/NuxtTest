<template>
  <button type="submit" class="func-button">{{ buttonLabel }}</button>
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
.func-button {
  width: 100%;
  margin-top: 35px;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(226, 223, 223, 0.7);
  color: black;
  border: 3px solid rgba(199, 192, 192, 0.4);
  transition: 0.3s;
  cursor: pointer;
}
.func-button:hover {
  background: rgb(143, 138, 138);
  transition: 0.3s;
}
</style>
