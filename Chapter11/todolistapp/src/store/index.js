import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import Constant from '../constant';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist: [
            { todo: "영화보기", done: false },
            { todo: "주말 산책", done: true },
            { todo: "ES6 학습", done: false },
            { todo: "잠실 야구장", done: false }
        ]
    },
    //state는 상태, payload는 변이에 필요한 데이터
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload.index, 1);
        }
    },
    actions: {
        [Constant.ADD_TODO]: (state, payload) => {
            console.log('### addTodo!!!');
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            console.log('### deleteTodo!!!');
            store.commit(Constant.DONE_TOGGLE, payload);
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            console.log('### doneToggle!!!');
            store.commit(Constant.DELETE_TODO, payload);
        }
    }
})

export default store;