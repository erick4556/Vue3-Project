<template>
  <li :class="{ done: isCompleted, 'margin-15': isDesktop }">
    {{ task }}
  </li>
</template>  

<script>
export default {
  name: "TodoItem",
  props: { task: String, isCompleted: Boolean, isDesktop: Boolean }, //Mediante objeto puedo validar el tipo de data que tengo que recibir en este componente
};
</script>

<style>
.done {
  color: #fff;
  background: green;
  font-size: 16px;
}
</style>