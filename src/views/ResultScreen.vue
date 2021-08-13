<template>
  <b-container>
    <!-- Calculates the score and displays -->
    <h1 id="result-heading">
      You scored: {{ getScore() }} out of {{ answers.length * 10 }}!
      <span class="celebrate">🎉</span>
    </h1>
    <b-row>
      <b-col>
        <h4>Your answers</h4>
      </b-col>
      <b-col>
        <h4 style="text-align:end;">Correct answers</h4>
      </b-col>
    </b-row>
    <!-- Loops through all the answers and creates a QuestionResult component -->
    <b-row v-for="(answer, index) in answers" :key="answer">
      <QuestionResult
        :question="questions[index].question"
        :playerAnswer="answers[index]"
        :correctAnswer="correctAnswers[index]"
      />
    </b-row>
    <b-row class="button-row">
      <b-col>
        <b-button block variant="primary" @click="restart()">Play again</b-button>
      </b-col>
      <b-col>
        <b-button block @click="goToStartScreen()">Go to start screen</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getStorage } from "../storage";
import QuestionResult from "../components/resultComponents/QuestionResult.vue";

export default {
  name: "ResultScreen",
  components: {
    QuestionResult,
  },
  data() {
    return {
      questions: [],
      answers: [],
      correctAnswers: [],
    };
  },
  methods: {
    /**
     * Method for restarting game (with same categories, amount of questions and difficulty)
     */
    restart() {
      this.$router.push("/questions");
    },
    /**
     * Method for routing us back to the "homepage" or "start screen".
     */
    goToStartScreen() {
      this.$router.push("/");
    },
    /**
     * Compares users answers with the correct answer of the question.
     * If they are the same, then score will increase by 10.
     */
    getScore() {
      let score = 0;
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === this.correctAnswers[i]) {
          score++;
        }
      }
      return score * 10;
    },
  },
  /**
   * Lifecycle method, for getting data from browsers local storage, will also loop through every question and push the correct
   * answer to an array of correctAnswers.
   */
  created() {
    this.questions = getStorage("questions");
    this.answers = getStorage("answers");
    this.questions.forEach((question) => {
      this.correctAnswers.push(question.correct_answer);
    });
  },
};
</script>

<style scoped>
#result-heading {
  text-align: center;
  margin: 5vh 0 5vh 0;
}

.celebrate:hover {
  cursor: pointer;
}

.button-row {
  margin-bottom: 5vh;
}
</style>
