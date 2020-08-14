import { GameStatus } from './../../new_types';
import styles from './../../styles/Schedule.module.css';
import {
  formatTime,
  formatClock,
  formatFinalSting,
} from './../../utils/helpers';

function ScheduleTime({
  gameStatus,
  date,
  align,
}: {
  gameStatus: GameStatus;
  date?: string;
  align: 'end' | 'center';
}) {
  const {
    type: { state, shortDetail },
  } = gameStatus;
  const preGame = state === 'pre';
  return (
    <div className={styles.timeContainer} style={{ textAlign: align }}>
      {/* {preGame ? formatTime(date) : shortDetail} */}
      {preGame ? shortDetail.split(' - ')[1] : shortDetail}
    </div>
  );
}

export default ScheduleTime;
