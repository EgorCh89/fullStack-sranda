<script setup>
import Calc from "../components/Calc.vue";
import Quiz from "../components/Quiz.vue";

let questions = [
  {
    question: "2 + 2 is?",
    answers: ["2", "4", "8", "-1/12"],
    right: 1,
  },
  {
    question: "how many days in February?",
    answers: ["27", "28", "29", "it depends"],
    right: 3,
  },
  {
    question: "Do you like Masa?",
    answers: ["No", "Yes!", "No", "mb"],
    right: 1,
  },
  {
    question: "Do you play House Fliper?",
    answers: ["Yes!", "No", "Long time ago"],
    right: 0,
  },
];
</script>

<template>
  <div>
    <h1>Quiz</h1>
    <Quiz :questions="questions" />
  </div>
</template>
