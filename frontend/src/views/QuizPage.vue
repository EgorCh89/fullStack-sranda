<script setup>
import Quiz from "../components/Quiz.vue";

let questions = [
  {
    question: "How do you do?",
    answers: ["good!", "bad", "cool", "Idk"],
    right: 0,
  },
  {
    question: "Do you want to sleep?",
    answers: ["Yes!", "No", "WHAT?", "Idk"],
    right: 1,
  },
  {
    question: "Do you like Masa?",
    answers: ["Yes!", "Yessss", "Hell Yea!", "YES!!!"],
    right: 1,
  },
];
</script>

<template>
  <div>
    <h1>Quiz</h1>
    <Quiz :questions="questions" />
  </div>
</template>
