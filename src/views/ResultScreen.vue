<template>
    <b-container>
        <h2 id="welcome-heading">Welcome to the results!</h2>
        
        <b-row v-for="(answer, index) in answers" :key="answer">
            <ResultPill
                :question="questions[index].question"
                :playerAnswer="answers[index]"
                :correctAnswer="correctAnswers[index]"
                />
        </b-row>
        <b-row>
            <b-col>
                <b-button block @click="restart()">Play again</b-button>
            </b-col>
            <b-col>
                <b-button block @click="goToStartScreen()">Go to start screen</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import {getStorage} from "../storage";
import ResultPill from '../components/resultComponents/ResultPill.vue'

export default {
    name: 'ResultScreen',
    components: {
        ResultPill
    },
    data() {
        return {
            questions: [],
            answers: [],
            correctAnswers: []
        }
    },
    methods: {
        restart() {
            this.$router.push("/questions");
        },
        goToStartScreen(){
            this.$router.push("/");
        }
    },
    created() {
        this.questions = getStorage("questions");
        this.answers = getStorage("answers");
        this.questions.forEach(question => {
            this.correctAnswers.push(question.correct_answer)
        });
    }
}
</script>

<style>

</style>