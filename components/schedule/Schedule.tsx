import ScheduleItem from './ScheduleItem';
import { Game } from './../../types';
import styles from './Schedule.module.css';

function Schedule({ schedule }: { schedule: Array<Game> }) {
  return (
    <ul className={styles.scheduleList}>
      {schedule.map((game: Game) => (
        <ScheduleItem {...game} />
      ))}
    </ul>
  );
}

export default Schedule;
