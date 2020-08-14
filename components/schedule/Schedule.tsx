import ScheduleItem from './ScheduleItem';
import { Game } from './../../new_types';
import styles from './../../styles/Schedule.module.css';

function Schedule({ games, date }: { games: Array<Game>; date: string }) {
  return (
    <section className={styles.scheduleListContainer}>
      <ul className={styles.scheduleList}>
        {games.map((game: Game) => (
          <ScheduleItem {...game} date={date} key={game.id} />
        ))}
      </ul>
    </section>
  );
}

export default Schedule;
