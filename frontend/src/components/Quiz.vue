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
const showRight = ref(false);
const score = ref(0);

for (let i = 0; i < props.questions.length; i++) {
  checkboxinput.value.push(ref());
}
/*
          v-model="checkboxinput.value[i][j]"

*/
function Check() {
  isSubmit.value = true;
  for (let i = 0; i < props.questions.length; i++) {
    if (
      checkboxinput.value[i] ===
      props.questions[i].answers[props.questions[i].right]
    ) {
      score.value++;
    }
  }
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
          :value="ans"
          :name="question.question"
          :id="ans + question.answers + question"
          v-model="checkboxinput[i]"
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
  <div v-if="isSubmit">
    Your score: {{ score }}/{{ questions.length }}

    <button v-if="!showRight" @click="showRight = true" class="btn btn-primary">
      show quiz
    </button>
  </div>

  <div v-if="showRight">
    <div v-for="(question, i) in questions">
      <h2>{{ question.question }}</h2>
      <div class="form-check" v-for="(ans, j) in question.answers">
        <input
          :checked="checkboxinput[i] === ans ? true : false"
          class="form-check-input"
          type="radio"
          :name="question.question"
          :id="ans + question.answers + question"
          :class="
            j === question.right
              ? 'right'
              : checkboxinput[i] === ans
              ? 'wrong'
              : ''
          "
        />
        <label
          class="form-check-label"
          :class="
            j === question.right
              ? 'right'
              : checkboxinput[i] === ans
              ? 'wrong'
              : ' '
          "
          :for="ans + question.answers + question"
        >
          {{ ans }}
        </label>
      </div>
    </div>
  </div>
</template>

<style>
.right {
  background-color: green;
}
.wrong {
  background-color: red;
}
.right:disabled {
  background-color: green;
}
.wrong:disabled {
  background-color: red;
}

.form-check-input:disabled {
  background-color: inherit;
  opacity: 1;
}
</style>
