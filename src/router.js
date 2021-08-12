import VueRouter from "vue-router";
import StartScreen from "./views/StartScreen.vue";
import QuestionScreen from "./views/QuestionScreen.vue";
import ResultScreen from "./views/ResultScreen";

// Routes within application.
const routes = [
    {
        path: "/",
        name: "Start-screen",
        component: StartScreen
    },
    {
        path: "/questions",
        name: "Questions",
        component: QuestionScreen
    },
    {
        path: "/results",
        name: "Results",
        component: ResultScreen
    }
];

// Creates a new VueRouter
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;