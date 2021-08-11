<template>
    <b-container>
        <b-row align-h="between" class="category">
            <h3>Category: {{category}} 🎶</h3>
            <h3>Question: {{index}}/{{numberOfQuestions}}</h3>
        </b-row>
        <b-row>
            <h1 class="question">{{question}}</h1>
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
    .category {
        margin-top: 10vh;
    }

    .question {
        margin: 2vh 0;
    }

    hr {
        margin-bottom: 4vh;
    }
</style>