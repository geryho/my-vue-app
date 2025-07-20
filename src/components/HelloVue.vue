<template>
  <h1 v-bind="data" v-html="hello"></h1>
  <p>{{ upper.toUpperCase() }}</p>
  <p>{{ 10 * 10 }}</p>
  <p>{{ helloFunc() }}</p>
  <button @click="i++">Click {{ i }}</button>
  <p>tes</p>
</template>

<script setup>
import { ref } from "vue";
const i = ref(0);

const hello = "<b>Hello Vue</b>";
const upper = "ini adalah test uppercase";
const data = {
  class: "hello",
  id: "vue",
};
console.log("Hello Vue");
const classname = "green";
const id = "hello";

function helloFunc() {
  return "Ini adalah Function";
}
</script>

<style type="text/tailwindcss">
* {
  border: 1px solid red;
}

.hello {
  color: chartreuse;
}
</style>
