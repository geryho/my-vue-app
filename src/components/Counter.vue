<template>
  <p>Counter = {{ count }}</p>
  <button
    @click="increment"
    class="mx-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded"
  >
    +
  </button>
  <button
    @click="decrement"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded"
  >
    -
  </button>
  <button
    @click="count = 0"
    class="mx-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded"
  >
    Reset
  </button>
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
/* {
  border: 1px solid red;
}*/
</style>
