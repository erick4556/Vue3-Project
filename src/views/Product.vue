<template>
  <h1>Product View</h1>
  <!-- Data desde el mixin -->
  <div>{{ num }}</div>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>

<script>
import { Counter } from "../mixin";
export default {
  mixins: [Counter],
  setup() {},
};
</script>