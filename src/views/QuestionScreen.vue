<template>
    <b-container>
      <QuestionBox 
        :question="questions[index]" 
        :nextQuestion="nextQuestion" 
        :index="index"
        />
    </b-container>
</template>

<script>
import QuestionBox from "../components/QuestionBox.vue";

export default {
  name: "QuestionScreen",
  props: {
    category: String,
    difficulty: String,
    numberOfQuestions: String,
  },
  components: {
      QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0
    };
  },
  methods: {
    results() {
      this.$router.push("/results");
    }, 
    nextQuestion() {
      this.index++;
    }
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
  }
};
</script>
