import { createStore, combineReducers } from 'redux';
import todoReducer from './todo';
import scheduleReducer from './schedule';

const rootReducer = combineReducers({
  todo: todoReducer,
  schedule: scheduleReducer,
});

export const store = createStore(rootReducer)

export type RootStore = ReturnType<typeof rootReducer>;
