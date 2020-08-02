// "clock": "",

// "period": {
//   "current": 2,
//   "type": 0,
//   "maxRegular": 4,
//   "isHalftime": true,
//   "isEndOfPeriod": true
// },

// "clock": "",
// "period": {
//   "current": 0,
//   "type": 0,
//   "maxRegular": 4,
//   "isHalftime": false,
//   "isEndOfPeriod": false
// },

import { Period, Game } from '../../types';
import styles from './../../styles/Schedule.module.css';
import {
  formatTime,
  formatClock,
  formatFinalSting,
} from './../../utils/helpers';

type TimeProps = Pick<
  Game,
  'clock' | 'period' | 'isGameActivated' | 'startTimeUTC'
> & { align: 'center' | 'end' };

function ScheduleTime({
  clock,
  period,
  isGameActivated,
  startTimeUTC,
  align,
}: TimeProps) {
  let value;
  if (isGameActivated) {
    value = formatClock(period, clock);
  } else {
    const gameOver = period.current > 3;
    value = gameOver ? formatFinalSting(period) : formatTime(startTimeUTC);
  }

  return (
    <div className={styles.timeContainer} style={{ textAlign: align }}>
      {value}
    </div>
  );
}

export default ScheduleTime;
