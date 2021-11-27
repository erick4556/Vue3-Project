<template>
  <li
    class="flex space-between align-center"
    :class="{ done: task.isCompleted, 'margin-15': isDesktop }"
  >
    <span>{{ task.description }}</span>

    <div>
      <TodoItemBtn
        :handle-click="completeTask"
        :task="task"
        :hide-on-completed="true"
        text-class="complete"
      >
        <i class="fas fa-check" />
      </TodoItemBtn>
      <TodoItemBtn :handle-click="deleteTask" :task="task" text-class="delete">
        <i class="fas fa-times" />
      </TodoItemBtn>
    </div>
  </li>
</template>  

<script>
import TodoItemBtn from "./TodoItemBtn.vue";
export default {
  name: "TodoItem",
  components: {
    TodoItemBtn,
  },
  props: {
    task: Object,
    isDesktop: Boolean,
    completeTask: Function,
    deleteTask: Function,
  }, //Mediante objeto puedo validar el tipo de data que tengo que recibir en este componente
  setup() {},
};
</script>

<style>
.done {
  color: #fff;
  background: #3eaf7c;
  font-size: 16px;
}
</style>