<template>
    <div>
        <h2>Welcome to the questions!</h2>
                <button @click="results()">Play again?</button>
        <p>{{this.props}} + ' World'</p>
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
