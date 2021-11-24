<template>
  <h1>Hello user {{ name }} - {{ lastname }}</h1>
  <div class="flex space-evenly">
    <router-link to="/users/marcos/profile">Go to Profile</router-link>
    <router-link to="/users/marcos/config">Go to Config</router-link>
  </div>
  <br />
  {{ message }}
  <router-view />
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return {
      name: route.params.name,
      lastname: route.query.lastname,
      message: route.params.message,
    };
  },
};
</script>
