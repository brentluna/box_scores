// import { Game, TeamWithGameStats, PlayerStats } from './../../types';
import { PlayerStats } from './../../new_types';
import Link from 'next/link';
import styles from './../../styles/BoxScore.module.css';

function PlayerRow({ player }: { player: PlayerStats }) {
  const {
    id,
    shortName,
    MIN,
    PTS,
    REB,
    AST,
    STL,
    BLK,
    TO,
    FG,
    OREB,
    DREB,
    PF,
    FT,
    displayName,
  } = player;
  return (
    <tr>
      <Link
        href={{ pathname: '/player/[pid]', query: { playerName: displayName } }}
        as={`/player/${id}?playerName=${displayName}`}
      >
        <td className={styles.nameCol}>{shortName}</td>
      </Link>
      <td>{MIN}</td>
      <td>{PTS}</td>
      <td>{REB}</td>
      <td>{AST}</td>
      <td>{STL}</td>
      <td>{BLK}</td>
      <td>{FG}</td>
      <td>{player['3PT']}</td>
      <td>{FT}</td>
      <td>{player['+/-']}</td>
      <td>{OREB}</td>
      <td>{DREB}</td>
      <td>{TO}</td>
      <td>{PF}</td>
    </tr>
  );
}

export default PlayerRow;
