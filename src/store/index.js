import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedCategory: "",
        selectedDifficulty: "",
        selectedNumberOfQuestions: "",
        questions: {}
    }, 
    mutations: {
        setSelectedCategory: (state, payload) => {
            state.selectedCategory = payload;
        },
        setSelectedDifficulty: (state, payload) => {
            state.selectedDifficulty = payload;
        },
        setSelectedNumberOfQuestions: (state, payload) => {
            state.selectedNumberOfQuestions = payload;
        },
        setQuestions: (state, payload) => {
            state.questions = payload;
        }
    },
    getters: {
        getSelectedCategory: () => {
            return this.state.selectedCategory;
        }
    }, 
    actions: {

    }
});