import { useCallback, useState } from "react";
import { Schedule, ScheduleAction } from "../../types";
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { ScheduleItem } from "./schedule-item";

export const ScheduleList: React.FC = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch<Dispatch<ScheduleAction>>();
  const schedules = useSelector<RootStore, Schedule[]>((state: RootStore) => state.schedule.schedules);

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD_SCHEDULE',
      payload: {
        id: Date.now(),
        text,
        date,
      }
    });
    setText('');
    setDate('');
  }, [dispatch, text, date]);

  return (
    <div>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="YYYY-MM-DD"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Schedule text"
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {schedules?.map((schedule) => (
          <ScheduleItem key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </div>
  );
}