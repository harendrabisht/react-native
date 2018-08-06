import {ADD_TODO} from './../constant';

export const addTodo = (data)=>({
    type: ADD_TODO,
    data
});