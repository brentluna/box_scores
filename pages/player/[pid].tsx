import styles from './../../styles/GameLogs.module.css';
import GameLogs from './../../components/game_logs/GameLogs';
import Header from './../../components/header/Header';
import router from 'next/router';
import { GameLog } from '../../new_types';
import { getGameLogs } from './../../utils/apis/player';
import player from '../api/player';

function Player({
  gameLogs,
  playerName,
}: {
  gameLogs: Array<GameLog>;
  playerName: string;
}) {
  return (
    <div>
      <Header>
        <button className={styles.scheduleButton} onClick={router.back}>
          Back
        </button>
      </Header>
      <div className={styles.playerDetailWrapper}>
        <h3>{playerName}</h3>
      </div>
      <GameLogs gameLogs={gameLogs} />
    </div>
  );
}

export default Player;

export const getServerSideProps = async (context) => {
  const { pid } = context.params;
  const { playerName } = context.query;
  const res = await getGameLogs(pid);
  return { props: { gameLogs: res, playerName } };
};
