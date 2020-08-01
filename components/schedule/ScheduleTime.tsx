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
import { formatDate, formatClock } from './../../utils/helpers';

type TimeProps = Pick<
  Game,
  'clock' | 'period' | 'isGameActivated' | 'startTimeUTC'
>;

function ScheduleTime({
  clock,
  period,
  isGameActivated,
  startTimeUTC,
}: TimeProps) {
  const value = isGameActivated
    ? formatClock(period, clock)
    : formatDate(startTimeUTC);

  return <div className={styles.timeContainer}>{value}</div>;
}

export default ScheduleTime;
