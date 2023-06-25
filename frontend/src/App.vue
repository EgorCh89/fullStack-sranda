<script setup></script>

<template>
  <div class="row">
    <div class="col-3">
      <ul class="list-group">
        <li class="list-group-item"><router-link to="/">Home</router-link></li>
        <li class="list-group-item">
          <router-link to="/calculator">Calculator</router-link>
        </li>
      </ul>
    </div>
    <div class="col-6"><router-view></router-view></div>
    <div class="col-3"></div>
  </div>
</template>

<style scoped>
.router-link {
}
</style>
