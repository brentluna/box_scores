import PlayerRow from './PlayerRow';
import { Game, TeamWithGameStats } from './../../types';
import { PlayerStats } from './../../new_types';
import styles from './../../styles/BoxScore.module.css';
function BoxScore({ stats }: { stats: Array<PlayerStats> }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Name</th>
            <th>Min</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Stl</th>
            <th>Blk</th>
            <th>FG</th>
            <th>3PT</th>
            <th>FT</th>
            <th>+/-</th>
            <th>OffReb</th>
            <th>DefReb</th>
            <th>TO</th>
            <th>Fouls</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {stats.map((player) => (
            <PlayerRow player={player} key={player.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoxScore;
