import ScheduleItem from './ScheduleItem';
import { Game } from './../../types';
import styles from './../../styles/Schedule.module.css';

function Schedule({ schedule }: { schedule: Array<Game> }) {
  return (
    <section className={styles.scheduleListContainer}>
      <ul className={styles.scheduleList}>
        {schedule.map((game: Game) => (
          <ScheduleItem {...game} />
        ))}
      </ul>
    </section>
  );
}

export default Schedule;
