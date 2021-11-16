<template>
  <h1>{{ title }}</h1>
  <!-- <p v-show="isVisible">{{ description }}</p> No elimina el elemento del DOM-->
  <!-- Elimina el elemento del DOM -->
  <p v-if="isVisible">{{ description }}</p>
  <p v-else>Mensaje cuando el mensaje principal se oculta</p>
  <input type="text" v-model="description" />
  <Todo />
</template>

<script>
import Todo from "./components/Todo.vue";
export default {
  name: "App",
  components: {
    Todo,
  },
  data: () => {
    return {
      title: "Hello - Test",
      description: "Description test",
      isVisible: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin-15 {
  margin-bottom: 15px;
}
</style>
