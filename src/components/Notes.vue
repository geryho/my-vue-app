<script setup>
import { ref } from "vue";
const showModal = ref(false);
const newNote = ref("");
</script>

<template>
  <main class="h-screen w-screen">
    <div
      v-if="showModal"
      class="overlay absolute w-[100%] h-[100%] bg-black/70 z-10 flex justify-center items-center"
    >
      <div
        class="modal w-[600px] bg-white rounded-[10px] p-[30px] relative flex flex-col items-center"
      >
        <textarea
          v-model="newNote"
          name="note"
          id="note"
          cols="30"
          rows="0"
          class="border-1 h-[150px] w-[550px] resize-none"
        ></textarea>
        <button
          class="px-[10] py-[20] w-[40%] items-center bg-violet-600 border-none text-white cursor-pointer mt-[15px]"
        >
          Add Note
        </button>
        <button
          @click="showModal = false"
          class="close px-[10] py-[20] w-[40%] bg-red-600 border-none text-white cursor-pointer mt-[7px]"
        >
          Close
        </button>
      </div>
    </div>

    <div class="container max-w-[1000px] p-[10px] mx-auto my-0">
      <header class="flex justify-between items-center">
        <h1 class="font-bold mb-[25px] text-[75px]">Notes {{ show }}</h1>
        <button
          @click="showModal = true"
          class="border-none p-[10px] w-[50px] h-[50px] cursor-pointer bg-gray-800 rounded-full text-white text-[20px]"
        >
          +
        </button>
      </header>
      <div class="cards-container flex flex-wrap">
        <div
          class="card w-[225px] h-[225px] bg-amber-300 p-[10px] rounded-[15px] flex flex-col justify-between mr-[20px] mb-[20px]"
        >
          <p class="main-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut cum
            aliquid
          </p>
          <p class="date text-[12.5px] font-bold">2025</p>
        </div>
        <div
          class="card w-[225px] h-[225px] bg-amber-300 p-[10px] rounded-[15px] flex flex-col justify-between mr-[20px] mb-[20px]"
        >
          <p class="main-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut cum
            aliquid
          </p>
          <p class="date text-[12.5px] font-bold">2025</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style type="text/tailwindcss">
/** {
  border: 1px solid red;
}*/
</style>
