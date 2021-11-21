<template>
  <h1>Hello</h1>
  <Todo />
</template>

<script>
import Todo from "../components/Todo.vue";
export default {
  name: "Home",
  components: {
    Todo,
  },
};
</script>