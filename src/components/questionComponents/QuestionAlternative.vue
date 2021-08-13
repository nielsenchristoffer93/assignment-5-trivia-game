<template>
  <b-button
    block
    variant="outline-secondary"
    class="question-buttons"
    @click="next"
    v-html="alternative"
  ></b-button>
</template>

<script>
export default {
  name: "QuestionAlternative",
  props: {
    alternative: String,
  },
  methods: {
    /**
     * Notifies the parent that an alternative-button has been pressed, and sends back the chosen alternative.
     */
    next() {
      this.$emit("next", this.alternative);
    }
  }
};
</script>

<style scoped>

.question-buttons {
  margin-bottom: 5vh;
}

</style>
