<template>
  <div id="app">
    <WouldYouRather
      v-for="element in questions"
      v-bind:key="element.id"
      v-bind:question="element"
      v-on:answer-changed="answerChanged"
    />
    <div id="answers" v-if="answers.length">
      <p>You would rather:</p>
      <ul>
        <li v-for="answer in answers" v-bind:key="answer.question">{{ answer.choice }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import WouldYouRather from "./components/WouldYouRather.vue";

export default {
  name: "App",
  components: {
    WouldYouRather
  },
  data: function() {
    return {
      answers: [],
      questions: [
        {
          id: 1,
          question: "...live in a house shaped like a cicle or a triangle?",
          answer1: "live in a circle",
          answer2: "live in a triangle"
        },
        {
          id: 2,
          question: "...be a detective or a pilot?",
          answer1: "be a detective",
          answer2: "be a pilot"
        },
        {
          id: 3,
          question: "...go skiing or go to a water park?",
          answer1: "go skiing",
          answer2: "go to a water park"
        },
        {
          id: 4,
          question: "...fly a kite or swing on a swing?",
          answer1: "fly a kite",
          answer2: "swing"
        },
        {
          id: 5,
          question: "...dance or sing?",
          answer1: "dance",
          answer2: "sing"
        },
        {
          id: 6,
          question: "...play hide and seek or dodgeball?",
          answer1: "play hide and seek",
          answer2: "play dodgeball"
        },
        {
          id: 7,
          question: "...be incredibly funny or incredibly smart?",
          answer1: "be funny",
          answer2: "be smart"
        }
      ]
    };
  },
  methods: {
    answerChanged: function(question, choice) {
      this.answers = this.answers.filter(answer => answer.id !== question.id);
      this.answers.push({
        id: question.id,
        choice
      });
      this.answers.sort((a, b) => a.id - b.id);
    }
  }
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color:wheat;
}
#answers {
  position: fixed;
  right: 50px;
  top: 0px;
}
</style>
