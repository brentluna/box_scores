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
  natlBroadcast,
}: Game & { date: string }) {
  const homeTeamWinning =
    Number.parseInt(hTeam.score) > Number.parseInt(vTeam.score);
  return (
    <Link
      href="/game/[date]/[gid]"
      as={`/game/${date.replace(/\//g, '_')}/${gameId}`}
    >
      <li className={styles.itemContainer}>
        <div className={styles.teamsContainer}>
          <ScheduleItemTeam {...vTeam} winning={!homeTeamWinning} />
          <ScheduleItemTeam {...hTeam} winning={homeTeamWinning} />
        </div>
        <div className={styles.clockWrapper}>
          <div className={styles.broadcast}>{natlBroadcast.join(', ')}</div>
          <ScheduleTime
            startTimeUTC={startTimeUTC}
            clock={clock}
            period={period}
            isGameActivated={isGameActivated}
            align="end"
          />
          <div />
        </div>
      </li>
    </Link>
  );
}

export default ScheduleItem;
