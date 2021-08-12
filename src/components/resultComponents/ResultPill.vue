<template>
    <b-container >
        <p class="question">{{question}}</p>
        <b-row>
            <b-col >
                <p class="playerAnswer"
                v-bind:class="[ isAnswerCorrect ? 'playerAnswerCorrect': 'playerAnswer' ]"> {{playerAnswer}}</p>
            </b-col>
            <b-col >
                <p class="correctAnswer"> {{correctAnswer}} </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ResultPill",
        data() {
            return {
                isAnswerCorrect: this.playerAnswer === this.correctAnswer,

            }
        },
        props: {
            question: String,
            playerAnswer: String,
            correctAnswer: String
        },
    }

</script>

<style scoped>
    .question{
        font-size: small;
    }
    .playerAnswer {
        background-color: rgb(179, 2, 2);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .playerAnswerCorrect {
        background-color: rgb(2, 179, 46);
    }
    .correctAnswer {
        background-color: rgb(2, 179, 46);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
</style>