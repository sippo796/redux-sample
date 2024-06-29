
export const addSchedule = (date: Date, text: string) => ({
  type: 'ADD_SCHEDULE',
  payload: { 
    id: Date.now(), 
    text,
    date
  },
});

export const removeSchedule = (id: number) => ({
  type: 'REMOVE_SCHEDULE',
  payload: { id },
});
