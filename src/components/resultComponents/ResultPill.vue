<template>
    <b-container >
        <p class="question">{{question}}</p>
        <b-row>
            <b-col class="zeroPaddingRight">
                <p class="playerAnswer"
                v-bind:class="[ isAnswerCorrect ? 'playerAnswerCorrect': 'playerAnswer' ]"> {{playerAnswer}}</p>
            </b-col>
            <b-col class="zeroPaddingLeft">
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

        margin-bottom: 0;
    }
    .playerAnswer {
        font-weight: 600;
        padding: 10px;
        
        border-right:2px solid rgb(54, 54, 54);
        background-color: rgb(179, 2, 2);
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
    .playerAnswerCorrect {
        background-color: rgb(2, 179, 46);
        border: 0;
    }
    .correctAnswer {
        font-weight: 600;
        padding: 10px;
        text-align: end;
        background-color: rgb(2, 179, 46);
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    .zeroPaddingLeft {
        padding-left: 0;
    }
    .zeroPaddingRight {
        padding-right: 0;
    }
    
</style>