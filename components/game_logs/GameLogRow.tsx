import { GameLog } from './../../new_types';
import { dateToMMDDYY } from './../../utils/helpers';

function GameLogRow({ gameLog }: { gameLog: GameLog }) {
  const { gameDate, atVs, oppAbbreviation, score, stats, gameResult } = gameLog;
  const { MIN, PTS, REB, AST, STL, BLK, TO, FG, FT, PF } = stats;
  return (
    <tr>
      <td>{formatDate(gameDate)}</td>
      <td>{`${gameResult} ${atVs} ${oppAbbreviation}`}</td>
      <td>{score}</td>
      <td>{MIN}</td>
      <td>{PTS}</td>
      <td>{REB}</td>
      <td>{AST}</td>
      <td>{STL}</td>
      <td>{BLK}</td>
      <td>{TO}</td>
      <td>{FG}</td>
      <td>{stats['FG%']}</td>
      <td>{stats['3PT']}</td>
      <td>{stats['3P%']}</td>
      <td>{FT}</td>
      <td>{stats['FT%']}</td>
      <td>{PF}</td>
    </tr>
  );
}

const formatDate = (date: string) => {
  const [day, month, year] = date.split('T')[0].split('-').reverse();
  return [day, month, year.slice(2)].join('/');
};
export default GameLogRow;
