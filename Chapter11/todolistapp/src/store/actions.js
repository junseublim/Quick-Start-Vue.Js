import Constants from '../constant';
export default {
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