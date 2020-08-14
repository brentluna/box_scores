import styles from './../../styles/GameLogs.module.css';
import { GameLog } from '../../new_types';
import GameLogRow from './GameLogRow';

function GameLogs({ gameLogs }: { gameLogs: Array<GameLog> }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Date</th>
            <th>Matchup</th>
            <th>Score</th>
            <th>Min</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Stl</th>
            <th>Blk</th>
            <th>TO</th>
            <th>FG</th>
            <th>FG%</th>
            <th>3PT</th>
            <th>3PT%</th>
            <th>FT</th>
            <th>FT%</th>
            <th>Fouls</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {gameLogs.map((gameLog) => (
            <GameLogRow gameLog={gameLog} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameLogs;
