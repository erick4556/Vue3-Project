<template>
  <h1>Hello user {{ $route.params.id }} - {{ $route.query.lastname }}</h1>
  <router-link to="/users/marcos/profile">Go to Profile</router-link>
  <br />
  <br />
  <router-link to="/users/marcos/config">Go to Config</router-link>
  <router-view />
</template>