<template>
  <b-container>
    <p class="question" v-html="question"></p>
    <b-row>
      <b-col class="zeroPaddingRight">
        <!-- Adds different css styling based on users answer-->
        <p
          class="playerAnswer"
          v-bind:class="[isAnswerCorrect ? 'playerAnswerCorrect' : 'playerAnswer']"
          v-html="playerAnswer"
        ></p>
      </b-col>
      <b-col class="zeroPaddingLeft">
        <p class="correctAnswer" v-html="correctAnswer"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ResultPill",
  data() {
    return {
      // Check if players answer is correct
      isAnswerCorrect: this.playerAnswer === this.correctAnswer
    };
  },
  props: {
    question: String,
    playerAnswer: String,
    correctAnswer: String,
  }
};
</script>

<style scoped>

.question {
  margin-bottom: 0;
}

.playerAnswer,
.correctAnswer {
  font-weight: 600;
  padding: 10px;
}

.playerAnswer {
  border-right: 2px solid rgb(54, 54, 54);
  background-color: rgb(220, 53, 69);
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.playerAnswerCorrect {
  background-color: rgb(60, 167, 69);
  border: 0;
}

.correctAnswer {
  text-align: end;
  background-color: rgb(60, 167, 69);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.zeroPaddingLeft {
  padding-left: 0;
}

.zeroPaddingRight {
  padding-right: 0;
}

</style>
