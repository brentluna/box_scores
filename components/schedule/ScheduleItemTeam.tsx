import { TeamWithGameInfo } from './../../types';
import { Team } from './../../new_types';
import styles from './../../styles/Schedule.module.css';
import { ShowScoresContext } from './../../pages/index';
import { useContext } from 'react';

function ScheduleItemTeam({
  displayName,
  score,
  winning,
}: Team & { winning?: boolean }) {
  const showScores = useContext(ShowScoresContext);
  return (
    <div className={`${styles.teamContainer} ${winning ? styles.bold : ''}`}>
      <div>{displayName}</div>
      <div>{showScores && score}</div>
    </div>
  );
}

export default ScheduleItemTeam;
