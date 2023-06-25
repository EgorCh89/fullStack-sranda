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
      <input v-model="text" class="form-control" type="number" />
    </div>
    <div class="col">
      <button @click="deletelast" class="btn btn-c">→</button>
      <button @click="negative" class="btn btn-c">±</button>
      <button @click="operatorHandler('+')" class="btn btn-c">+</button>
      <button @click="reset" class="btn btn-c">C</button>
    </div>
    <div class="col">
      <button
        v-for="number in [1, 2, 3]"
        :key="number"
        @click="numberHandler(number)"
        class="btn btn-c"
      >
        {{ number }}
      </button>
      <button @click="operatorHandler('/')" class="btn btn-c">/</button>
    </div>
    <div class="col">
      <button
        v-for="number in [4, 5, 6]"
        :key="number"
        @click="numberHandler(number)"
        class="btn btn-c"
      >
        {{ number }}
      </button>
      <button @click="operatorHandler('-')" class="btn btn-c">-</button>
    </div>
    <div class="col">
      <button
        v-for="number in [7, 8, 9]"
        :key="number"
        @click="numberHandler(number)"
        class="btn btn-c"
      >
        {{ number }}
      </button>
      <button @click="operatorHandler('*')" class="btn btn-c">*</button>
    </div>
    <div class="col">
      <button @click="numberHandler('0')" id="wide" class="btn btn-c">0</button>
      <button @click="numberHandler('.')" class="btn btn-c">.</button>
      <button @click="resultHandler" class="btn btn-c">=</button>
    </div>
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
.btn-c {
  background-color: var(--alt-color);
  color: var(--secondary-color);
  width: 3em;
  height: 3em;
  margin: 0.2em;
}
.btn-c:hover {
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
  color: var(--secondary-color);
}
.form-control:placeholder {
  color: var(--secondary-color);
}
</style>
