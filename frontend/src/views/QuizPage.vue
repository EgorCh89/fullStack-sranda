<script setup>
import Calc from "../components/Calc.vue";
import Quiz from "../components/Quiz.vue";

let set = {
  info: {
    name: "Math quiz",
  },
  questions: [
    {
      type: "poll",
      question: "2 + 2 is?",
      answers: ["2", "4", "8", "-1/12"],
      right: [1],
    },
    {
      type: "poll",
      question: "how many days in February?",
      answers: ["27", "28", "29", "it depends"],
      right: [1, 2, 3],
    },
    {
      type: "poll",
      question: "Do you like Masa?",
      answers: ["No", "Yes!", "No", "mb"],
      right: [1],
    },
    {
      type: "poll",
      question: "Do you play House Fliper?",
      answers: ["Yes!", "No", "Long time ago"],
      right: [0, 1, 2],
    },
  ],
};
</script>

<template>
  <div>
    <Quiz :set="set" />
  </div>
</template>
