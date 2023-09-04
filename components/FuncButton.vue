<template>
  <button type="submit" class="func-button">{{ text }}</button>
</template>

<script>
export default {
  data() {
    return {
      text: "returnLabel",
    };
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
  border: 1px solid black;
  background: white;
  color: black;
  transition: 0.3s;
  cursor: pointer;
}
.func-button:hover {
  color: white;
  background: black;
  transition: 0.3s;
}
</style>
