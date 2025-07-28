<script setup>
import { ref } from "vue";

//states
const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const errorMessage = ref(""); //return falsy

//function random color for card container
function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

//function add note
const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = "minimum characters must be 10 or more");
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
};

function close() {
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>

<template>
  <!--main-->
  <main class="h-screen w-screen">
    <!--show Modal-->
    <div
      v-if="showModal"
      class="overlay absolute w-[100%] h-[100%] bg-black/70 z-10 flex justify-center items-center"
    >
      <div
        class="modal w-[600px] rounded-[10px] p-[30px] relative flex flex-col items-center bg-white"
      >
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="0"
          class="border-1 h-[150px] w-[550px] resize-none"
        ></textarea>

        <!--error message if character less than 10 chars-->
        <p v-if="errorMessage" class="text-red-500 text-left w-full">
          {{ errorMessage }}
        </p>

        <!--add note button-->
        <button
          @click="addNote"
          class="px-[10] py-[20] w-[40%] items-center bg-violet-600 border-none text-white cursor-pointer mt-[15px]"
        >
          Add Note
        </button>

        <!--close button-->
        <button
          @click="close"
          class="close px-[10] py-[20] w-[40%] bg-red-600 border-none text-white cursor-pointer mt-[7px]"
        >
          Close
        </button>
      </div>
    </div>

    <!--Container Button and Cards-->
    <div class="container max-w-[1000px] p-[10px] mx-auto my-0">
      <header class="flex justify-between items-center">
        <h1 class="font-bold mb-[25px] text-[50px]">Notes</h1>

        <!--add card button-->
        <button
          @click="showModal = true"
          class="border-none p-[10px] w-[50px] h-[50px] cursor-pointer bg-gray-800 rounded-full text-white text-[15px] grid place-items-center"
        >
          +
        </button>

        <!--card container-->
      </header>
      <div class="cards-container flex flex-wrap">
        <div
          v-for="note in notes"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
          class="card w-[225px] h-[225px] p-[10px] rounded-[15px] flex flex-col justify-between mr-[20px] mb-[20px] overflow-auto whitespace-pre-wrap break-words relative"
        >
          <button
            @click.stop="deleteNote(note.id)"
            class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>
          <p class="main-text mt-4">
            {{ note.text }}
          </p>
          <p class="date text-[12.5px] font-bold">
            {{ note.date.toLocaleDateString("en-US") }}
          </p>
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
