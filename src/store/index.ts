import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        author: 'zhoou',
        skills: [
            { id: 1, name: 'Javascript', isUsing: true },
            { id: 2, name: 'Html5', isUsing: true },
            { id: 3, name: 'Css3', isUsing: true },
            { id: 4, name: 'Typescript', isUsing: true },
            { id: 5, name: 'Webpack', isUsing: true },
            { id: 6, name: 'ES6', isUsing: true },
            { id: 7, name: 'Flex', isUsing: true },
            { id: 8, name: 'Bootstrap', isUsing: false },
            { id: 9, name: 'Nodejs', isUsing: false },
            { id: 10, name: 'Docker', isUsing: false },
            { id: 11, name: 'Nginx', isUsing: false },
            { id: 12, name: 'Sass', isUsing: true },
            { id: 13, name: 'Python', isUsing: false },
            { id: 14, name: '.NET', isUsing: false }
        ]
    },
    getters: {
        authorName: state => {
            return state.author
        },
        usingSkills: state => {
            return state.skills.filter(todo => todo.isUsing)
        }
    },
    actions: {

    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});

export default store;