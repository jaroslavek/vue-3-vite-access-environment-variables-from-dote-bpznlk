<script setup>
const publicEnvVar = import.meta.env.VITE_MY_ENV_VARIABLE;
const privateEnvVar = import.meta.env.SERVER_SIDE_ONLY_VAR;
const envVarJhoOne = import.meta.env.VITE_JHO_ONE;
</script>

<template>
  <div class="card m-3">
    <h5 class="card-header">
      Vue 3 + Vite - Access Environment Variables from dotenv (.env)
    </h5>
    <div class="card-body">
      <p>VITE_MY_ENV_VARIABLE: {{ publicEnvVar }}</p>
      <p>SERVER_SIDE_ONLY_VAR: {{ privateEnvVar }}</p>
      <br />
      <p>envVarJhoOne: {{ envVarJhoOne }} x2</p>
    </div>
  </div>
</template>
