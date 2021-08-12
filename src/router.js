import VueRouter from "vue-router";
import StartScreen from "./views/StartScreen.vue";
import QuestionScreen from "./views/QuestionScreen.vue";
import ResultScreen from "./views/ResultScreen";

const routes = [
    {
        path: "/",
        name: "Start-screen",
        component: StartScreen
    },
    {
        //path: "/questions/:category/:numberOfQuestions/:difficulty",
        path: "/questions",
        name: "Questions",
        component: QuestionScreen
        //props: true
    },
    {
        path: "/results",
        name: "Results",
        component: ResultScreen
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;