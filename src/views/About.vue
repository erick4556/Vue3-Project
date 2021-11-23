<template>
  <h1>About my app</h1>
</template>

<script>
import { onBeforeRouteLeave } from "vue-router";
export default {
  setup() {
    onBeforeRouteLeave(() => {
      console.log("Saliendo de la ruta about");
    });
  },
};
</script>