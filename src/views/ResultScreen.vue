<template>
    <div>
        <h2>Welcome to the results!</h2>
        <button @click="restart()">Play again?</button>
    </div>
</template>

<script>
import {getStorage} from "../storage";

export default {
    name: 'ResultScreen',
    data() {
        return {
            questions: [],
            answers: []
        }
    },
    methods: {
        restart() {
            this.$router.push("/questions");
        }
    },
    created() {
        this.questions = getStorage("questions");
        this.answers = getStorage("answers");
    }
}
</script>
