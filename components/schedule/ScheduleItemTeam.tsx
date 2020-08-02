import { TeamWithGameInfo } from './../../types';
import styles from './../../styles/Schedule.module.css';
import { ShowScoresContext } from './../../pages/index';
import { useContext } from 'react';

function ScheduleItemTeam({ simpleName, location, score }: TeamWithGameInfo) {
  const showScores = useContext(ShowScoresContext);
  return (
    <div className={styles.teamContainer}>
      <div>{`${location} ${simpleName}`}</div>
      <div>{showScores && score}</div>
    </div>
  );
}

export default ScheduleItemTeam;
