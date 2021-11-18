<template>
  <input type="text" v-model="newTask" @keyup.enter="addTask" />
  <ul>
    <li
      v-bind:class="{ 'margin-15': isDesktop }"
      v-bind:style="{
        color: activeColor,
        background: background,
        fontSize: fontSize + 'px',
      }"
      v-for="task in tasks"
      v-bind:key="task.id"
    >
      {{ task.description }}
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
import { v4 as uuid4 } from "uuid";
export default {
  name: "Todo",
  setup() {
    const tasks = ref([
      {
        id: uuid4(),
        description: "Curso 1",
        isCompleted: false,
      },
      {
        id: uuid4(),
        description: "Curso 2",
        isCompleted: false,
      },
      {
        id: uuid4(),
        description: "Curso 3",
        isCompleted: false,
      },
      {
        id: uuid4(),
        description: "Curso 4",
        isCompleted: false,
      },
    ]);
    const isDesktop = ref(true);
    const activeColor = ref("#fff");
    const background = ref("green");
    const fontSize = ref(16);
    const newTask = ref("");

    // Methods
    const addTask = () => {
      tasks.value.push({
        id: uuid4(),
        description: newTask.value,
        isCompleted: false,
      });
      newTask.value = "";
    };

    return {
      tasks,
      isDesktop,
      activeColor,
      background,
      fontSize,
      newTask,
      addTask,
    };
  },
};
</script>

<style lang="">
</style>