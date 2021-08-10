<template>
  <b-container>
    <h1 id="welcome">WELCOME TO A TRIVIA GAME MADE WITH VUE</h1>
    <b-col id="input" md="6" offset-md="3" align-self="center">
    <b-card id="card">
      <b-row>
        <label for="numberOfQuestions">Number of questions:</label>
        <b-form-input type="number" id="numberOfQuestions"/>
      </b-row>
      <b-row>
        <label for="difficulty">Select difficulty:</label>
        <b-form-select v-model="selectedDifficulty" name="difficulty" id="difficulty">
          <option v-for="difficulty in this.difficulties" :key="difficulty.value">
            {{difficulty.text}}
          </option>
        </b-form-select>
      </b-row>
      <b-row>
        <label for="category">Select category:</label>
        <b-form-select v-model="selectedCategory" name="category" id="category" >
          <option v-for="category in this.categories" :key="category.id">
          {{category.name}}
          </option>
        </b-form-select>
      </b-row>
      <b-row>
        <b-button block variant="success" id="startButton" @click="startGame()">Start Game</b-button>
      </b-row>
    </b-card>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: 'StartScreen',
  components: {
    
  },
  methods: {
    startGame() {
      this.$router.push("/questions");
    }
  },
  created: function() {
    fetch("https://opentdb.com/api_category.php", {
      method: "get"
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      this.categories = jsonData.trivia_categories;
    })
  },
  data() {
    return {
      categories: [],
      difficulties: [
      {
        value: 1,
        text: "Any Difficulty"
      },
      {
        value: 2,
        text: "Easy"
      },
      {
        value: 3,
        text: "Medium"
      },
      {
        value: 4,
        text: "Hard"
      }
      ],
      selectedCategory: null,
      selectedDifficulty: null
    }
  },
}
</script>

<style>
#startButton {
  margin-top: 10vh
}
#welcome {
  text-align: center;
  margin: 5vh 0 15vh 0;
}
#card {
  padding: 20px;
  background-color: rgba(224, 224, 224, 0.867);
}

/* {
  font-family: 'Roboto', sans-serif;
}

.flex-container {
  width: 60vw;
  margin: 0 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

label {
   margin-top: 20px;
}

input, 
select,
button {
  height: 40px;
  padding: 0;
  border-radius: 50px;
}

button {
  margin-top: 40px;
  background-color: green;
}
*/
</style>
