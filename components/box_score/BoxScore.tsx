import PlayerRow from './PlayerRow';
import { Game, TeamWithGameStats } from './../../types';
import styles from './../../styles/BoxScore.module.css';
function BoxScore({ team }: { team: TeamWithGameStats }) {
  const { playerStats } = team;
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Name</th>
          <th>Pts</th>
          <th>Reb</th>
          <th>Ast</th>
          <th>Stl</th>
          <th>Blk</th>
          <th>TO</th>
          <th>+/-</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {playerStats.map((player) => (
          <PlayerRow player={player} key={player.personId} />
        ))}
      </tbody>
    </table>
  );
}

export default BoxScore;
