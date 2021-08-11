<template>
    <b-container>
        <QuestionHeader :category="question.category" :question="question.question" :index="index+1"/>
            <div v-for="alternative in answers(question)" :key="alternative">
              <b-row>
                <QuestionAlternative :alternative="alternative" :nextQuestion="nextQuestion"/>
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
        nextQuestion: Function
    },
    methods: {
      answers(question) {
        let alternatives = [...question.incorrect_answers];
        alternatives.push(question.correct_answer);
        return alternatives;
      }
    }
}
</script>

<style scoped>

</style>