<template>
  <input type="text" v-model="newTask" @keyup.enter="addTask" />
  <div class="">
    <p>Total de tareas: {{ sizeOfCompletedTasks }}</p>
  </div>
  <ul>
    <TodItem
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task.description"
      :isCompleted="task.isCompleted"
      :isDesktop="isDesktop"
    />
  </ul>
</template>

<script>
import { computed, ref, watch } from "vue";
import { v4 as uuid4 } from "uuid";
import TodItem from "./TodoItem.vue";

export default {
  name: "Todo",
  components: {
    TodItem,
  },
  setup() {
    const tasks = ref([
      {
        id: uuid4(),
        description: "Curso 1",
        isCompleted: true,
      },
      {
        id: uuid4(),
        description: "Curso 2",
        isCompleted: false,
      },
      {
        id: uuid4(),
        description: "Curso 3",
        isCompleted: true,
      },
      {
        id: uuid4(),
        description: "Curso 4",
        isCompleted: true,
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

    //Computed properties
    const sizeOfCompletedTasks = computed(() => {
      const completedTasks = tasks.value.filter((task) => task.isCompleted);
      return completedTasks.length;
    });

    // Watch
    watch(
      newTask, //Elemento a esuchar
      (current, prev) => {
        console.log(
          `Se ha modificado este valor: newTask => valor anterior ${prev} - Valor actual ${current}`
        );
        if (current.length > 0) {
          console.log("Texto válido");
        } else {
          console.log("Texto inválido");
        }
      }
    );

    return {
      tasks,
      isDesktop,
      activeColor,
      background,
      fontSize,
      newTask,
      addTask,
      sizeOfCompletedTasks,
    };
  },
};
</script>

<style lang="">
</style>