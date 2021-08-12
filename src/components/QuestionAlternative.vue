<template>
    <b-button block variant="outline-secondary" class="question-buttons" @click="next" v-html="alternative"></b-button>
</template>

<script>
export default {
    name:"QuestionAlternative",
    props: {
        alternative: String,
    },
    methods: {
        next() {
            this.$emit('next', this.alternative);
        }
    }
}
</script>

<style scoped>
    .question-buttons {
        margin-bottom: 5vh;
    }
</style>