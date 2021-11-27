<template>
  <!-- <input type="text" v-model="newTask" @keyup.enter="addTask" /> -->
  <!-- Quiero que escuche el evento text -->
  <TodoForm @text="addTask" />
  <div class="flex space-evenly align-center">
    <p>Total de tareas completadas: {{ sizeOfCompletedTasks }}</p>
  </div>
  <ul>
    <TodItem
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task"
      :isDesktop="isDesktop"
      :complete-task="completeTask"
      :delete-task="deleteTask"
    />
  </ul>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { v4 as uuid4 } from "uuid";
import TodItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";
import useTodo from "../composables/useTodo";

export default {
  name: "Todo",
  components: {
    TodItem,
    TodoForm,
  },
  setup() {
    const { tasks, sizeOfCompletedTasks, addTask, completeTask, deleteTask } =
      useTodo();

    // const tasks = ref();
    const isDesktop = ref(true);
    const activeColor = ref("#fff");
    const background = ref("green");
    const fontSize = ref(16);
    const newTask = ref("");

    onMounted(() => {
      tasks.value = [
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
          isCompleted: true,
        },
        {
          id: uuid4(),
          description: "Curso 4",
          isCompleted: false,
        },
      ];
    });

    // Methods
    // const addTask = ({ inputText }) => {
    //   /*  tasks.value.push({
    //     id: uuid4(),
    //     description: newTask.value,
    //     isCompleted: false,
    //   });
    //   newTask.value = ""; */
    //   //Uso de event
    //   tasks.value.push({
    //     id: uuid4(),
    //     description: inputText.value,
    //     isCompleted: false,
    //   });
    // };

    /*  const completeTask = (task) => {
      task.isCompleted = true;
    };

    const deleteTask = (taskRemoved) => {
      tasks.value = tasks.value.filter((t) => t.id !== taskRemoved.id);
    }; */

    //Computed properties
    /*  const sizeOfCompletedTasks = computed(() => {
      const completedTasks = tasks.value.filter((task) => task.isCompleted);
      return completedTasks.length;
    }); */

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
      completeTask,
      deleteTask,
    };
  },
};
</script>

<style lang="">
</style>