<template>
  <label class="label">
    Email
    <input class="input" type="email" />
  </label>
  <label class="label">
    Password
    <input class="input" type="password" />
  </label>
</template>

<script>
export default {};
</script>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

.input {
  padding: 7px 15px;
}
</style>
