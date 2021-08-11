<template>
    <b-button block variant="outline-secondary" class="question-buttons" @click="nextQuestion">{{alternative}}</b-button>
</template>

<script>
export default {
    props: {
        alternative: String,
        nextQuestion: Function
    }
}
</script>

<style scoped>
    .question-buttons {
        margin-bottom: 5vh;
    }
</style>