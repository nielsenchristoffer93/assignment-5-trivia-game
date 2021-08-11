<template>
    <b-container>
      <QuestionBox 
        :question="questions[index]" 
        :index="index"
        :numberOfQuestions="questions.length"
        @next="next"
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
      index: 0,
      playerAnswers: []
    };
  },
  methods: {
    next(alternative) {
        this.index++;
        this.playerAnswers.push(alternative);
        if(this.index === this.questions.length){
            this.$router.push("/results");
        }
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
