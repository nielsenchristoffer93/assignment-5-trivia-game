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
import {getStorage, setStorage} from "../storage";

export default {
  name: "QuestionScreen",
  
  components: {
      QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      playerAnswers: [],
      category: "",
      difficulty: "",
      numberOfQuestions: "",
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
    if (!this.numberOfQuestions) {
      console.log("numberOfQuestions is: " + this.numberOfQuestions);
      this.numberOfQuestions = 10;
      setStorage("numberOfQuestions", 10)
    } else {
      this.numberOfQuestions = getStorage("numberOfQuestions");
    }
    if (!this.difficulty) {
      console.log("difficulty is: " + this.difficulty);
      this.difficulty = "";
    } else {
      this.difficulty = getStorage("selectedDifficulty");
    }
    if (!this.category) {
      console.log("category is: " + this.category);
      this.category = "";
    } else {
      this.category = getStorage("selectedCategory");
    }

    await fetch(`https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficult=${this.difficulty}`)
          .then(response => response.json())
          .then(data => (this.questions = data.results))
          .catch(error => console.log(error));

    setStorage("questions", this.questions);
  }
};
</script>
