<template>
  <b-container v-if="question">
    <QuestionHeader
      :category="question.category"
      :question="question.question"
      :index="index"
      :numberOfQuestions="numberOfQuestions"
    />
    <div v-for="alternative in answers(question)" :key="alternative">
      <b-row>
        <QuestionAlternative :alternative="alternative" @next="next" />
      </b-row>
    </div>
  </b-container>
</template>

<script>
import QuestionHeader from "./QuestionHeader.vue";
import QuestionAlternative from "./QuestionAlternative.vue";

export default {
  name: "QuestionBox",
  components: {
    QuestionHeader,
    QuestionAlternative,
  },
  props: {
    question: Object,
    index: Number,
    numberOfQuestions: Number,
  },
  methods: {
    /**
     * Adds both correct and incorrect answers to an array, then returns the array shuffled.
     */
    answers(question) {
      let alternatives = [...question.incorrect_answers];
      alternatives.push(question.correct_answer);
      return this.shuffleAnswers(alternatives);
    },
    /**
     * Shuffles an array using Durstenfeld's shuffle
     */
    shuffleAnswers(answers) {
      for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
      }
      return answers;
    },
    /**
     * Notifies the parent that an alternative-button has been pressed, and sends back the chosen alternative.
     */
    next(alternative) {
      this.$emit("next", alternative);
    }
  }
};
</script>
