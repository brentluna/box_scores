import { TeamWithGameInfo } from './../../types';
import styles from './Schedule.module.css';

function ScheduleItemTeam({ simpleName, location, score }: TeamWithGameInfo) {
  return (
    <div className={styles.teamContainer}>
      <div>{`${location} ${simpleName}`}</div>
      <div>{score}</div>
    </div>
  );
}

export default ScheduleItemTeam;
