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
for (let i = 0; i < questions.value.length; i++) {
  checkboxinput.value.push([]);
}

function Check() {
  isSubmit.value = true;
  for (let i = 0; i < questions.value.length; i++) {
    let rights = [];

    for (let g = 0; g < questions.value[i].right.length; g++) {
      rights.push(questions.value[i].answers[questions.value[i].right[g]]);
    }
    let add = !(checkboxinput.value[i].length === 0);
    for (let j = 0; j < checkboxinput.value[i].length; j++) {
      let atLeastOneCorrect = false;

      if (!rights.includes(checkboxinput.value[i][j])) {
        add = false;
      }
    }
    if (add) {
      score.value++;
    }
  }
}
</script>

<template>
  <h1>{{ set.info.name }}</h1>
  <form @submit="Check" v-if="!isSubmit">
    <div v-for="(question, i) in questions">
      <h2>
        {{ question.required ? "*" + question.question : question.question }}
      </h2>
      <div class="form-check" v-for="(ans, j) in question.answers">
        <input
          class="form-check-input"
          type="checkbox"
          :value="ans"
          :id="ans"
          v-model="checkboxinput[i]"
        />
        <label class="form-check-label" :for="ans">
          {{ question.required ? "*" + ans : ans }}
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
          :checked="checkboxinput[i].includes(ans) ? true : false"
          class="form-check-input"
          type="checkbox"
          :disable="true"
          :id="ans + question.answers + question"
          :class="
            question.right.includes(j)
              ? 'right'
              : checkboxinput[i].includes(ans)
              ? 'wrong'
              : ''
          "
        />
        <label
          class="form-check-label"
          :class="
            question.right.includes(j) // TODO: dodelat!
              ? 'right'
              : checkboxinput[i].includes(ans)
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
