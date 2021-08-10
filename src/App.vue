<template>
    <div id="app">
        <!--<router-view @selected-category="updateSelectedCategory" @selected-difficulty="updateSelectedDifficulty" @selected-number-of-questions="updateSelectedNumberOfQuestions"/>-->
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        /*data() {
            return {
                selectedNumberOfQuestions: null,
                selectedDifficulty: null,
                selectedCategory: null
            }
        },
        methods: {
            updateSelectedDifficulty(difficulty) {
                this.selectedDifficulty = difficulty;
            },
            updateSelectedNumberOfQuestions(numberOfQuestions) {
                this.selectedNumberOfQuestions = numberOfQuestions;
            },
            updateSelectedCategory(category) {
                this.selectedCategory = category;
            }
        }*/
        
    }
</script>

<style>

</style>
