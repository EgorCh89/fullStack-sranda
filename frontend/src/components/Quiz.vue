<script setup>
import { defineComponent, onMounted, ref } from "vue";
const props = defineProps({
  questions: {
    type: Array,
    requied: true,
  },
});
const isSubmit = ref(false);
const checkboxinput = ref([]);
for (let i = 0; i < props.questions.length; i++) {
  let row = [];
  for (let j = 0; j < props.questions[i].answers.length; j++) {
    row.push();
  }
  checkboxinput.value.push(row);
}
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
        />
        <label
          class="form-check-label"
          :for="ans + question.answers + question"
        >
          {{ ans }}
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
  </form>
  <div v-if="isSubmit">Your score: 69</div>
</template>
