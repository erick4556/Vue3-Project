<template>
  <input type="text" v-model="inputText" @keyup.enter="addTask" />
</template>

<script>
import { ref } from "vue";
export default {
  //emit es una función que permite emitir eventos al componente padre
  setup(props, { emit }) {
    const inputText = ref("");

    const addTask = () => {
      emit("text", { inputText });
      inputText.value = "";
    };

    return {
      inputText,
      addTask,
    };
  },
};
</script>