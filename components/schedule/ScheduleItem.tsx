import { Game } from '../../types';
import ScheduleItemTeam from './ScheduleItemTeam';
import ScheduleTime from './ScheduleTime';
import styles from './../../styles/Schedule.module.css';
// import { Link } from 'next';
import Link from 'next/link';

function ScheduleItem({
  date,
  gameId,
  startTimeUTC,
  clock,
  vTeam,
  hTeam,
  period,
  isGameActivated,
}: Game & { date: string }) {
  return (
    <Link
      href="/game/[date]/[gid]"
      as={`/game/${date.replace(/\//g, '_')}/${gameId}`}
    >
      <li className={styles.itemContainer}>
        <div className={styles.teamsContainer}>
          <ScheduleItemTeam {...vTeam} />
          <ScheduleItemTeam {...hTeam} />
        </div>
        <ScheduleTime
          startTimeUTC={startTimeUTC}
          clock={clock}
          period={period}
          isGameActivated={isGameActivated}
        />
      </li>
    </Link>
  );
}

export default ScheduleItem;
