<template>
  <b-container>
    <h1 id="welcome-heading">WELCOME TO A TRIVIA GAME MADE WITH VUE 🙋‍♂️</h1>
    <b-col id="input" md="6" offset-md="3" align-self="center">
      <b-card id="card">
        <b-row>
          <label for="numberOfQuestions">Number of questions:</label>
          <!-- Sets the border red if NumberInRange===false else green -->
          <b-form-input
            :state="numberInRange()"
            v-model="numberOfQuestions"
            type="number"
            id="numberOfQuestions"
            aria-describedby="input-live-help input-live-feedback"
          ></b-form-input>
        </b-row>
        <b-row>
          <label for="difficulty">Select difficulty:</label>
          <b-form-select
            v-model="selectedDifficulty"
            name="difficulty"
            id="difficulty"
          >
            <option :value="null">Any Difficulty</option>
            <option
              v-for="difficulty in this.difficulties"
              :key="difficulty.value"
              :value="difficulty.text.toLowerCase()"
            >
              {{ difficulty.text }}
            </option>
          </b-form-select>
        </b-row>
        <b-row>
          <label for="category">Select category:</label>
          <b-form-select
            v-model="selectedCategory"
            name="category"
            id="category"
          >
            <option :value="null">Any Category</option>
            <option
              v-for="category in this.categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </b-form-select>
        </b-row>
        <b-row>
          <!-- Button is disabled if numberInRange()=== false -->
          <b-button
            block
            variant="success"
            :disabled="numberInRange() === false"
            id="startButton"
            @click="startGame"
            >Start Game</b-button
          >
        </b-row>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
import { setStorage } from "../storage";

export default {
  name: "StartScreen",
  components: {},
  data() {
    return {
      selectedCategory: null,
      selectedDifficulty: null,
      numberOfQuestions: 10,
      categories: [],
      difficulties: [
        {
          value: 0,
          text: "Easy",
        },
        {
          value: 1,
          text: "Medium",
        },
        {
          value: 2,
          text: "Hard",
        },
      ]
    }
  },
  methods: {
    /**
     * Saves the chosen settings to localStorage, then switches to questionScreen
     */
    startGame() {
      setStorage("numberOfQuestions", this.numberOfQuestions);
      setStorage("selectedDifficulty", this.selectedDifficulty);
      setStorage("selectedCategory", this.selectedCategory);
      this.$router.push("/questions");
    },
    /**
     * Returns true or false if Number of Questions is the inside or outside of the range.
     */
    numberInRange() {
      return !(this.numberOfQuestions < 1 || this.numberOfQuestions > 50)
        ? true
        : false;
    }
  },
  /**
   * Fetches all the categories from the api and saves it to the categories variable,
   * also clears localStorage.
   */
  created() {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => (this.categories = data.trivia_categories))
      .catch((error) => console.log(error));

    // Clears localStorage of keys and values.
    localStorage.clear();
  }
};
</script>

<style>
#startButton {
  margin-top: 6vh;
}
#welcome-heading {
  text-align: center;
  margin: 5vh 0 10vh 0;
}
#card {
  padding: 20px;
  background-color: rgba(224, 224, 224, 0.867);
}
</style>
