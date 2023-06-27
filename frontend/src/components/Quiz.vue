<script setup>
import { defineComponent, onMounted, ref } from "vue";
const props = defineProps({
  set: Object,
});
console.log(props.set.info);

const isSubmit = ref(false);
const checkboxinput = ref([]);
const showRight = ref(false);
const score = ref(0);
const questions = ref(props.set.questions);
for (let i = 0; i < questions.length; i++) {
  checkboxinput.value.push(ref());
}

function Check() {
  isSubmit.value = true;
  console.log(questions.value);
  for (let i = 0; i < questions.value.length; i++) {
    console.log(checkboxinput.value[i]);
    console.log(questions.value[i].answers[questions.value[i].right]);
    if (
      checkboxinput.value[i] ===
      questions.value[i].answers[questions.value[i].right]
    ) {
      score.value++;
    }
  }
}
</script>

<template>
  <h1>{{ set.info.name }}</h1>
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
          :class="true ? 'right' : checkboxinput[i] === ans ? 'wrong' : ''"
        />
        <label
          class="form-check-label"
          :class="
            question.right === [] // TODO: dodelat!
              ? 'right'
              : checkboxinput[i] === ans
              ? 'wrong'
              : ' '
          "
          :for="ans + question.answers + question"
        >
          {{ ans }} a {{ question.right }}
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
