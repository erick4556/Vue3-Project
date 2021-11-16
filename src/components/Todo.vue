<template>
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
export default {
  name: "Todo",
  data: () => {
    return {
      tasks: [
        {
          id: 0,
          description: "Curso 1",
          isCompleted: false,
        },
        {
          id: 1,
          description: "Curso 2",
          isCompleted: false,
        },
        {
          id: 2,
          description: "Curso 3",
          isCompleted: false,
        },
        {
          id: 3,
          description: "Curso 4",
          isCompleted: false,
        },
      ],
      isDesktop: true,
      activeColor: "#fff",
      background: "green",
      fontSize: 16,
    };
  },
};
</script>

<style lang="">
</style>