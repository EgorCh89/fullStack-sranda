<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // type inference enabled
  props: {
    msg: { type: String, required: true },
  },
  data() {
    return {
      count: 1,
    };
  },
});
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p></p>
  </div>
</template>

<style>
.card {
  width: 10em;
  height: 10em;
  border: 2px;
  border-radius: 15%;
  background-color: blue;
  text-align: center;
  align-items: center;
  display: grid;
}
h1,
p {
  color: white;
}
</style>
