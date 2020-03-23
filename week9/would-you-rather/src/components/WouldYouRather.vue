<template>
  <div class="question">
    <h2>{{ question.question }}</h2>
    <input
      type="radio"
      v-model="choice"
      v-bind:value="question.answer1"
      v-on:change="$emit('answer-changed', question, choice)"
    />
    <label>{{ question.answer1 }}</label>
    <input
      type="radio"
      v-model="choice"
      v-bind:value="question.answer2"
      v-on:change="$emit('answer-changed', question, choice)"
    />
    <label>{{ question.answer2 }}</label>
  </div>
</template>

<script>
export default {
  name: "WouldYouRather",
  data() {
    return {
      choice: ""
    };
  },
  props: {
    question: Object
  }
};
</script>

<style>
.question {
  margin: 10px;
  padding: 20px;
  width: 500px;
  background: rgb(255, 217, 210);
  border: 1px solid rgb(250, 179, 166);
  box-shadow: inset 1px 1px rgb(250, 179, 166);
  box-shadow: 1px 1px tomato;
  border-radius: 5px;
}
</style>
