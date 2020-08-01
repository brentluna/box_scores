import { Game } from '../../types';
import ScheduleItemTeam from './ScheduleItemTeam';
import ScheduleTime from './ScheduleTime';
import styles from './Schedule.module.css';

function ScheduleItem({
  gameId,
  startTimeUTC,
  clock,
  vTeam,
  hTeam,
  period,
  isGameActivated,
}: Game) {
  return (
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
  );
}

export default ScheduleItem;
