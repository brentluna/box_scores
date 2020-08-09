import styles from './../../styles/GameLogs.module.css';
import GameLogs from './../../components/game_logs/GameLogs';
import Header from './../../components/header/Header';
import router from 'next/router';
import { GameLog } from '../../types';
function Player({ gameLogs }: { gameLogs: Array<Array<GameLog>> }) {
  const gameLog = gameLogs[0][0];
  return (
    <div>
      <Header>
        <button className={styles.scheduleButton} onClick={router.back}>
          Back
        </button>
      </Header>
      <div className={styles.playerDetailWrapper}>
        <span>{gameLog.PLAYER_NAME}</span>
        <span>{gameLog.TEAM_NAME}</span>
      </div>
      <GameLogs gameLogs={gameLogs} />
    </div>
  );
}

export default Player;

export const getServerSideProps = async (context) => {
  const { pid } = context.params;
  const res = await fetch(
    `http://${context.req.headers.host}/api/player?playerID=${pid}`
  );
  const gameLogs = await res.json();
  return { props: { pid, gameLogs } };
};
