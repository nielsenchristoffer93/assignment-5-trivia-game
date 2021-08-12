<template>
    <b-container class="question-header">
        <b-row align-h="between" class="category">
            <h3>Category: {{category}} 🎶</h3>
            <h3>Question: {{index}}/{{numberOfQuestions}}</h3>
        </b-row>
        <b-row>
            <h1 class="question" v-html="question"></h1>
        </b-row>
        <hr>
    </b-container>
</template>

<script>
    export default {
        name: "QuestionHeader",
        props: {
            category: String,
            question: String,
            index: Number,
            numberOfQuestions: Number
        }
    }
</script>


<style scoped>
    .question-header {
        height: 30vh;
        position: relative;
    }
    .category {
        margin-top: 10vh;
    }

    .question {
        margin: 2vh 0;
    }

    hr {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: 4vh;
    }
</style>