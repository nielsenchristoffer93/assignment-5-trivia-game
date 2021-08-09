<template>
    <div>
        <h2>Welcome to the questions!</h2>
                <button @click="results()">Play again?</button>

    </div>
</template>


<script>
export default {
  name: 'QuestionScreen',
  components: {
    
  },
  methods: {
        results() {
            this.$router.push("/results");
        }
    }
}
</script>
