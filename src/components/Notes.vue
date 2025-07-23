<script setup></script>

<template>
  <main class="h-screen w-screen">
    <div class="container max-w-[1000px] p-[10px] mx-auto my-0">
      <header class="flex justify-between items-center">
        <h1 class="font-bold mb-[25px] text-[75px]">Notes</h1>
        <button
          class="border-none p-[10px] w-[50px] h-[50px] cursor-pointer bg-gray-800 rounded-full text-white text-[20px]"
        >
          +
        </button>
      </header>
      <div class="cards-container">
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
