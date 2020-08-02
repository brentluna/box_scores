import PlayerRow from './PlayerRow';
import { Game, TeamWithGameStats } from './../../types';
import styles from './../../styles/BoxScore.module.css';
function BoxScore({ team }: { team: TeamWithGameStats }) {
  const { playerStats } = team;
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
          {playerStats.map((player) => (
            <PlayerRow player={player} key={player.personId} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoxScore;
