<template>
  <button
    :class="textClass"
    v-show="!(task.isCompleted && hideOnCompleted)"
    @click="handleClick(task)"
  >
    <slot> Completar </slot>
  </button>
</template>

<script>
export default {
  props: ["handleClick", "task", "hideOnCompleted", "textClass"],
  setup() {},
};
</script>

<style scoped>
/* scoped son estilos propios de este componente */
button {
  background: rgba(255, 255, 255, 0);
  margin: 0 5px;
  border-style: none;
  padding: 10px;
}
.complete {
  color: #3eaf7c;
}
.delete {
  color: #f53d3d;
}
</style>