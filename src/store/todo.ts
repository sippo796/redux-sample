import { Todo, TodoAction } from "../types";
import { produce } from "immer";
import { Reducer } from "redux";

export type TodoStore = {
  todos: Todo[];
}

const initialState: TodoStore = {
  todos: [],
};

const todoReducer:Reducer<TodoStore, TodoAction> = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const {id, text} = action.payload;

      return produce(state, (draft) => {
        draft.todos.push({
          id,
          text,
        });
      });
    }
    case 'REMOVE_TODO':{
      const { id } = action.payload;

      return produce(state, (draft) => {
        draft.todos = draft.todos.filter(todo => todo.id !== id);
      });
    }
    default:
      return state;
  }
};

export default todoReducer;