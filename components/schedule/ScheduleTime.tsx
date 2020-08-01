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

const quarterString = (quarter: number) => {
  if (quarter > 4) {
    return `${quarter - 4} OT`;
  }
  switch (quarter) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    default:
      return 'n/a';
  }
};

const formatClock = (period: Period, clock: string) => {
  if (period.isHalftime) return 'Halftime';
  if (period.isEndOfPeriod) return `End of ${quarterString(period.current)}`;
  return `${clock} ${quarterString(period.current)}`;
};
const formatDate = (startTimeUTC: string) => {
  const date = new Date(Date.parse(startTimeUTC));
  return date.toLocaleTimeString('en-US', {
    minute: '2-digit',
    hour: '2-digit',
  });
};

interface ScheduleTime {
  clock: string;
}

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
