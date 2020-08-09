import styles from './../../styles/GameLogs.module.css';
import { GameLog } from '../../types';
import GameLogRow from './GameLogRow';

function GameLogs({ gameLogs }: { gameLogs: Array<Array<GameLog>> }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Date</th>
            <th>Matchup</th>
            <th>Min</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Stl</th>
            <th>Blk</th>
            <th>TO</th>
            <th>+/-</th>
            <th>FGM/A</th>
            <th>TPM/A</th>
            <th>OffReb</th>
            <th>DefReb</th>
            <th>Fouls</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {gameLogs.map((logSet) => {
            return logSet.map((gameLog) => <GameLogRow gameLog={gameLog} />);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GameLogs;
