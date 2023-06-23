<script setup>
import { defineComponent, ref } from "vue";

const text = ref("");
const operator = ref("");
const memory = ref("");

function numberHandler(number) {
  text.value += number;
}
function operatorHandler(op) {
  operator.value = op;
  memory.value = text.value;
  text.value = "";
}
function resultHandler() {
  text.value = eval(memory.value + operator.value + text.value);
  memory.value = text.value;
}
function reset() {
  text.value = "";
  operator.value = "";
  memory.value = "";
}
function deletelast() {
  text.value = text.value.slice(0, -1);
}
function negative() {
  text.value = -parseInt(text.value);
}
</script>

<template>
  <div class="calc">
    <div class="col">
      <input
        v-model="text"
        class="form-control"
        type="number"
        placeholder="0" />
    </div>
    <div class="col">
      <button @click="deletelast" class="btn">→</button>
      <button @click="negative" class="btn">±</button>
      <button @click="operatorHandler('+')" class="btn">+</button>
      <button @click="reset" class="btn">C</button>
    </div>
    <div class="col">
      <button
        v-for="number in [1, 2, 3]"
        :key="number"
        @click="numberHandler(number)"
        class="btn">
        {{ number }}
      </button>
      <button @click="operatorHandler('/')" class="btn">/</button>
    </div>
    <div class="col">
      <button
        v-for="number in [4, 5, 6]"
        :key="number"
        @click="numberHandler(number)"
        class="btn">
        {{ number }}
      </button>
      <button @click="operatorHandler('-')" class="btn">-</button>
    </div>
    <div class="col">
      <button
        v-for="number in [7, 8, 9]"
        :key="number"
        @click="numberHandler(number)"
        class="btn">
        {{ number }}
      </button>
      <button @click="operatorHandler('*')" class="btn">*</button>
    </div>
    <div class="col">
      <button @click="numberHandler('0')" id="wide" class="btn">0</button>
      <button @click="numberHandler('.')" class="btn">.</button>
      <button @click="resultHandler" class="btn">=</button>
    </div>
    <p>{{ text }} {{ operator }}</p>
  </div>
</template>

<style>
.calc {
  padding: 1.5em;
  background-color: var(--bg-color);
  border-radius: 15%;
  width: 18em;
  height: 22em;
  text-align: center;
  margin: auto;
}
#wide {
  width: 6.4em;
}
.btn {
  background-color: var(--alt-color);
  color: var(--secondary-color);
  width: 3em;
  height: 3em;
  margin: 0.2em;
}
.btn:hover {
  background-color: var(--hover-color);
}
.form-control {
  width: 13.2em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.2em;
  background-color: var(--alt-color);
  border: 0;
}
</style>
