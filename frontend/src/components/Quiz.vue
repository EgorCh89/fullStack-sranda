<script setup>
import { defineComponent, onMounted, ref } from "vue";
const props = defineProps({
  set: Object,
});

const isSubmit = ref(false);
const checkboxinput = ref([]);
const showRight = ref(false);
const score = ref(0);
const questions = ref(props.set.questions);
console.log(questions.value.length);
for (let i = 0; i < questions.value.length; i++) {
  checkboxinput.value.push([]);
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
          class="form-check-input"
          type="checkbox"
          :value="ans"
          :id="ans"
          v-model="checkboxinput[i]"
        />
        <label class="form-check-label" :for="ans">
          {{ ans }} {{ checkboxinput }}
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
          type="checkbox"
          :id="ans + question.answers + question"
          :class="
            question.right.includes(j)
              ? 'right'
              : checkboxinput[i] === ans
              ? 'wrong'
              : ''
          "
        />
        <label
          class="form-check-label"
          :class="
            question.right.includes(j) // TODO: dodelat!
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

  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      Checked checkbox
    </label>
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
