<template>
    <b-container>
        <h1 id="welcome-heading">You scored: {{getScore()}} out of {{answers.length*10}}! 🎉</h1>
        <b-row>
            <b-col>
                <h4 >Your answers</h4>
            </b-col>
            <b-col>
                <h4 style="text-align:end;">Correct answers</h4>
            </b-col>
        </b-row>
        <b-row v-for="(answer, index) in answers" :key="answer">
            <ResultPill
                :question="questions[index].question"
                :playerAnswer="answers[index]"
                :correctAnswer="correctAnswers[index]"
                />
        </b-row>

        <b-row>
            <b-col>
                <b-button block variant="primary" @click="restart()">Play again</b-button>
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
        },
        getScore() {
            let score = 0;
            for(let i = 0; i < this.answers.length; i++) {
                if(this.answers[i] === this.correctAnswers[i]){
                    score++;
                }
            }
            return score*10;
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