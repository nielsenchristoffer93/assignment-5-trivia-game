<template>
  <div class="flex-container">
    <h1>WELCOME TO A TRIVIA GAME MADE WITH VUE</h1>
    <label for="numberOfQuestions">Number of questions:</label>
    <input type="number" id="numberOfQuestions">

    <label for="difficulty">Select difficulty:</label>
    <select name="difficulty" id="difficulty"></select>

    <label for="category">Select category:</label>
    <select name="category" id="category"></select>

    <button id="startButton">Start Game</button>
  </div>
</template>

<script>
export default {
  name: 'StartScreen',
  components: {
    
  }
}
</script>

<style>
* {
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
</style>
