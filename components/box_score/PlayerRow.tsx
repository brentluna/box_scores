import { Game, TeamWithGameStats, PlayerStats } from './../../types';

function PlayerRow({ player }: { player: PlayerStats }) {
  const {
    firstName,
    lastName,
    points,
    totReb,
    assists,
    steals,
    blocks,
    turnovers,
    plusMinus,
  } = player;
  return (
    <tr>
      <td>{`${firstName.slice(0, 1)}. ${lastName}`}</td>
      <td>{points}</td>
      <td>{totReb}</td>
      <td>{assists}</td>
      <td>{steals}</td>
      <td>{blocks}</td>
      <td>{turnovers}</td>
      <td>{plusMinus}</td>
    </tr>
  );
}

export default PlayerRow;
