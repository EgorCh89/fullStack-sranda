<script setup>
import { defineComponent, onMounted, ref } from "vue";
const props = defineProps({
  questions: {
    type: Array,
    requied: true,
  },
});
const isSubmit = ref(false);
const isTrue = ref([]);
isTrue.value.push(ref([]));
isTrue.value.push(ref([]));
isTrue.value[1].value.push(ref(false));
console.log(isTrue.value);
const checkboxinput = ref([]);
console.log(checkboxinput.value);
for (let i = 0; i < props.questions.length; i++) {
  let row = ref([]);
  for (let j = 0; j < props.questions[i].answers.length; j++) {
    row.value.push(ref(false));
  }

  checkboxinput.value.push(row.value);
  console.log(checkboxinput.value);
}
console.log("------------------");
console.log(checkboxinput.value);
/*
          v-model="checkboxinput.value[i][j]"

*/

function Check() {
  isSubmit.value = true;
  let score = 0;
}
</script>

<template>
  <form @submit="Check" v-if="!isSubmit">
    <div v-for="(question, i) in questions">
      <h2>{{ question.question }}</h2>
      <div class="form-check" v-for="(ans, j) in question.answers">
        <input
          required
          class="form-check-input"
          type="radio"
          :name="question.question"
          :id="ans + question.answers + question"
          v-model="checkboxinput[i][j]"
        />
        <label
          class="form-check-label"
          :for="ans + question.answers + question"
        >
          {{ ans }} [{{ i }}|{{ j }}]
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
  </form>
  <div v-if="isSubmit">Your score: 69 {{ isTrue }}</div>
  value = {{ checkboxinput }}
</template>
