// import { Game } from '../../types';
import { Game } from '../../new_types';
import ScheduleItemTeam from './ScheduleItemTeam';
import ScheduleTime from './ScheduleTime';
import styles from './../../styles/Schedule.module.css';
// import { Link } from 'next';
import Link from 'next/link';

function ScheduleItem({
  id,
  date,
  status,
  vTeam,
  hTeam,
  natlBroadcast,
}: Game & { date: string }) {
  const homeTeamWinning =
    Number.parseInt(hTeam.score) > Number.parseInt(vTeam.score);
  return (
    <Link href="/game/[gid]" as={`/game/${id}`}>
      <li className={styles.itemContainer}>
        <div className={styles.teamsContainer}>
          <ScheduleItemTeam {...vTeam} winning={!homeTeamWinning} />
          <ScheduleItemTeam {...hTeam} winning={homeTeamWinning} />
        </div>
        <div className={styles.clockWrapper}>
          <div className={styles.broadcast}>{natlBroadcast.join(', ')}</div>
          <ScheduleTime gameStatus={status} date={date} align="end" />
          <div />
        </div>
      </li>
    </Link>
  );
}

export default ScheduleItem;
