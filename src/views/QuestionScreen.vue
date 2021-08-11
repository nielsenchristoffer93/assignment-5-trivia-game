<template>
    <b-container>
      <QuestionBox 
        :question="questions[index]" 
        :index="index+1"
        :numberOfQuestions="questions.length"
        @next="next"
        />
    </b-container>
</template>

<script>
import QuestionBox from "../components/QuestionBox.vue";
import {setStorage} from "../storage";

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
        this.playerAnswers.push(alternative)
        setStorage("answers", this.playerAnswers);
        if(this.index === this.questions.length){
            this.$router.push("/results");
        }
    }
  },
  async created() {
    await fetch(`https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficult=${this.difficulty}`)
    .then(response => response.json())
    .then(data => (this.questions = data.results))

    setStorage("questions", this.questions);
  }
};
</script>
