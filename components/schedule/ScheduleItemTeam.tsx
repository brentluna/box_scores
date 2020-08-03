import { TeamWithGameInfo } from './../../types';
import styles from './../../styles/Schedule.module.css';
import { ShowScoresContext } from './../../pages/index';
import { useContext } from 'react';

function ScheduleItemTeam({
  teamName,
  simpleName,
  location,
  score,
  winning,
}: TeamWithGameInfo & { winning?: boolean }) {
  const showScores = useContext(ShowScoresContext);
  return (
    <div className={`${styles.teamContainer} ${winning ? styles.bold : ''}`}>
      <div>{teamName}</div>
      <div>{showScores && score}</div>
    </div>
  );
}

export default ScheduleItemTeam;
