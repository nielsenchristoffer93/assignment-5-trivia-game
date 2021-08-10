<template>
  <div>
    <h2>Welcome to the questions!</h2>
    <button @click="results()">Play again?</button>
    <p>{{ this.category }}</p>
  </div>
</template>

<script>
export default {
  name: "QuestionScreen",
  props: {
    category: String,
    difficulty: String,
    numberOfQuestions: String,
  },
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    results() {
      this.$router.push("/results");
    },
  },
  created() {
    fetch(
      `https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficult=${this.difficulty}`,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.questions = jsonData.results;
      });
  },
};
</script>
