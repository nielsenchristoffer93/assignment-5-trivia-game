import VueRouter from 'vue-router';
import StartScreen from './views/StartScreen.vue';
import QuestionScreen from './views/QuestionScreen.vue';
import ResultScreen from './views/ResultScreen';

const routes = [
    {
        path: '/',
        name: 'Start-screen',
        component: StartScreen
    },
    {
        path: '/questions',
        name: 'Questions',
        component: QuestionScreen,
        props: {
            questions: []
        }
    },
    {
        path: '/results',
        name: 'Results',
        component: ResultScreen
    }
];

const router = new VueRouter({routes});

export default router;