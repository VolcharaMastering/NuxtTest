<template>
  <article class="modal-wrap">
    <div class="modal-container" v-click-away="handleClickaway">
      <span class="icon-close" @click="$emit('modalClose')" />
      <h1>{{ modalName }}</h1>
      <form>
        <component :is="modalName === 'LogIn' ? 'LogIn' : 'LogOn'"></component>
      </form>
    </div>
  </article>
</template>

<script>
import { mixin as VueClickAway } from "vue3-click-away";
import LogIn from "./LogIn.vue";
import LogOn from "./LogOn.vue";
export default {
  props: {
    modalName: {
      type: String,
      default: "",
    },
  },
  mixins: [VueClickAway],

  methods: {
    handleClickaway() {
      this.$emit("modalClose", this.email);
    },
  },
  components: {
    LogIn,
    LogOn,
  },
};
</script>

<style scoped>
.modal-wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.modal-container {
  width: 400px;
  padding: 30px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 14px;
  cursor: pointer;
}
.icon-close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -25px;
  top: -25px;
}
.icon-close::after {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 0;
}
.icon-close::before {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(-45deg);
  position: absolute;
  top: 50%;
  left: 0;
}
</style>
