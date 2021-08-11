<template>
    <b-container>
        <QuestionHeader :category="question.category" :question="question.question" :index="index+1" :numberOfQuestions="numberOfQuestions"/>
            <div v-for="alternative in answers(question)" :key="alternative">
              <b-row>
                <QuestionAlternative :alternative="alternative" @next="next"/>
              </b-row>
            </div>
    </b-container>
</template>

<script>
import QuestionHeader from "../components/QuestionHeader.vue";
import QuestionAlternative from "../components/QuestionAlternative.vue";

export default {
components: {
      QuestionHeader,
      QuestionAlternative
  },
    props: {
        question: Object,
        index: Number,
        numberOfQuestions: Number
    },
    methods: {
      answers(question) {
        let alternatives = [...question.incorrect_answers];
        alternatives.push(question.correct_answer);
        return alternatives;
      },
      next(alternative){
        this.$emit('next', alternative)
      }
    },
}
</script>

<style scoped>

</style>