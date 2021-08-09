<template>
    <div>
        <h2>Welcome to the results!</h2>
        <button @click="restart()">Play again?</button>
    </div>
</template>

<script>

export default {
    name: 'ResultScreen',
    components: {
  },
    methods: {
        restart() {
            this.$router.push("/questions");
        }
    }
}
</script>
