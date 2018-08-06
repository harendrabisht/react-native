import {LOAD_TODO, ADD_TODO} from './constant';



const initialState = {
    todos: [
        {
        title:'First todo',
        description:'Todo Description'
    },
        {
        title:'Second todo',
        description:'Todo Description'
    },
        {
        title:'Third todo',
        description:'Todo Description'
    },
        {
        title:'Fourth todo',
        description:'Todo Description'
    },
        {
        title:'Fifth todo',
        description:'Todo Description'
    },
],
    isFetching: false
}
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TODO:
            return state;

        case ADD_TODO:
            let todos = state.todos;
            let {title, description} = action.data;
            return Object.assign({}, state, {todos: [...state.todos,{
                title,
                description,
                done:false,
                date: Date.now()
            }]});
        
        default:
            return initialState;
    }

}