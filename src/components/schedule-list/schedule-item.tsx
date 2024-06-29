import { useDispatch } from "react-redux";
import { Schedule, ScheduleAction } from "../../types";
import { Dispatch } from 'redux'
import { useCallback } from "react";

interface ScheduleItemProps {
  schedule: Schedule;
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({ schedule }) => {
  const dispatch = useDispatch<Dispatch<ScheduleAction>>();

  const removeSchedule = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE_SCHEDULE',
      payload: {
        id,
      }
    });
  }, [dispatch]);

  return (
    <div>
      {schedule.date} : {schedule.text}
      <button onClick={() => removeSchedule(schedule.id)}>Remove</button>
    </div>
  );
};
