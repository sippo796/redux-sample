import produce from "immer";
import { Schedule, ScheduleAction } from "../types";
import { Reducer } from "redux";

export type ScheduleStore = {
  schedules: Schedule[];
}

const initialState: ScheduleStore = {
  schedules: [],
};

const scheduleReducer:Reducer<ScheduleStore, ScheduleAction> = (state = initialState, action: ScheduleAction) => {
  switch(action.type) {
    case 'ADD_SCHEDULE': {
      const { id, text, date } = action.payload;

      return produce(state, (draft) => {
        draft.schedules.push({
          id,
          text,
          date,
        });
      });
    }
    case 'REMOVE_SCHEDULE': {
      const { id } = action.payload;

      return produce(state, (draft) => {
        draft.schedules = draft.schedules.filter(schedule => schedule.id !== id);
      });
    }
    default:
      return state;
  }
}

export default scheduleReducer;