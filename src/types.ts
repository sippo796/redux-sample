export type TodoAction = | 
{ 
  type: 'ADD_TODO'; 
  payload: {
    id:number,
    text: string  
  } 
} | { 
  type: 'REMOVE_TODO';
  payload: {
    id:number
  }
}; 

export type ScheduleAction = |
{ 
  type: 'ADD_SCHEDULE';
  payload: {
    id:number,
    date: string,
    text: string
  }
} | { 
  type: 'REMOVE_SCHEDULE';
  payload: {
    id:number
  }
}
  

export type Todo = {
  id: number;
  text: string;
}

export type Schedule = {
  id: number;
  date: string;
  text: string;
}

export type ActionType = TodoAction | ScheduleAction;