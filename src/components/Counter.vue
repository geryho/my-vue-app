<template>
  <p>Counter = {{ count }}</p>
  <button @click="increment" class="mx-3 px-3">+</button>
  <button @click="decrement" class="mx-3 px-3">-</button>
  <button @click="count = 0" class="mx-3 px-3">Reset</button>
</template>

<script setup>
import { ref } from "vue";
let count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style type="text/tailwindcss">
* {
  border: 1px solid red;
}
</style>
