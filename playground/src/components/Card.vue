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
    <p>Tohle je hodne zlobiva carta</p>
  </div>
</template>




<style>
.card {
  width: 200;
  height: 200;
  border: 50px;
  border-radius: 50%;
  background-color: blue;
}
h1,
p {
  color: white;
}
</style>