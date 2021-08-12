<template>
    <b-container class="question-header">
        <b-row align-h="between" class="category">
            <!-- Displays category (with appropriate emoji) and the progress of questions -->
            <h3>Category: {{appendEmojiBasedOnCategory()}}</h3>
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
        },
        methods: {
            // Appends an emoji to the end of the category based on the name of the category.
            appendEmojiBasedOnCategory() {
                if (this.category.includes("Knowledge")) {
                    return this.category + " 🧠"
                } else if (this.category.includes("Video Games")) {
                    return this.category + " 👾"
                } else if (this.category.includes("Books")) {
                    return this.category + " 📚"
                } else if (this.category.includes("Film")) {
                    return this.category + " 🎬"
                } else if (this.category.includes("Music")) {
                    return this.category + " 🎶"
                } else if (this.category.includes("Television")) {
                    return this.category + " 📺"
                } else if (this.category.includes("Board Games")) {
                    return this.category + " ♟"
                } else if (this.category.includes("Nature")) {
                    return this.category + " 🌲"
                } else if (this.category.includes("Politics")) {
                    return this.category + " 👨‍⚖️"
                } else if (this.category.includes("Cartoon")) {
                    return this.category + " ✏"
                }  else if (this.category.includes("Computers")) {
                    return this.category + " 💻"
                } else if (this.category.includes("Sports")) {
                    return this.category + " ⚽"
                } else if (this.category.includes("Geography")) {
                    return this.category + " 🌍"
                } else if (this.category.includes("Art")) {
                    return this.category + " 🎨"
                } else if (this.category.includes("Celebrities")) {
                    return this.category + " 📸"
                } else if (this.category.includes("Animals")) {
                    return this.category + " 🐴"
                } else if (this.category.includes("Vehicles")) {
                    return this.category + " 🚙"
                } else {
                    return this.category + " 📖"
                }
            }
        }
    }
</script>

<style scoped>
    .question-header {
        height: 40vh;
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