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
      numberOfQuestions: Number,
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
    this.numberOfQuestions = getStorage("numberOfQuestions");
    this.difficulty = getStorage("selectedDifficulty");
    this.category = getStorage("selectedCategory");


    if (!this.numberOfQuestions) {
      console.log("HEJ")
      this.numberOfQuestions = "10";
      setStorage("numberOfQuestions", "10");
    }
    
    if (!this.difficulty) {
      this.difficulty = "";
      setStorage("selectedDifficulty", this.difficulty);
    } 

    if (!this.category) {
      this.category = "";
      setStorage("selectedCategory", this.category);
    } 

    await fetch(`https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`)
          .then(response => response.json())
          .then(data => (this.questions = data))
          .catch(error => console.log(error));

    if (this.questions.response_code === 1) {
      alert("There are not enough questions in this category and difficulty.");
      this.$router.push("/");
    } else {
      this.questions = this.questions.results;
    }

    setStorage("questions", this.questions);
  }
};
</script>
