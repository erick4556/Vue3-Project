<template>
  <h1>{{ title }}</h1>
  <!-- <p v-show="isVisible">{{ description }}</p> No elimina el elemento del DOM-->
  <!-- Elimina el elemento del DOM -->
  <p v-if="isVisible">{{ description }}</p>
  <p v-else>Mensaje cuando el mensaje principal se oculta</p>
  <div class="flex space-evenly">
    <router-link to="/">Ir a Inicio</router-link>
    <router-link to="/login">Ir a Login</router-link>
    <router-link to="/about">Ir a About</router-link>
  </div>
  <router-view /><!-- Para renderizar las routas -->
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  name: "App",
  setup() {
    const title = ref(""); // ref es una función que devuelve una referencia;
    const description = ref("Este es un mensaje");
    const isVisible = ref(true);

    //Métodos del ciclo de vida(hooks)
    onMounted(() => {
      console.log("Componente montado");
      title.value = "Bienvenido a test de vue";
    });

    onBeforeUnmount(() => {
      console.log("Componente desmontado"); // Se ejecuta antes de eliminar el componente del DOM
    });

    return {
      title,
      description,
      isVisible,
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
.flex {
  display: flex;
}
.space-evenly {
  justify-content: space-evenly;
}
</style>
