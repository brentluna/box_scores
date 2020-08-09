import { GameLog } from './../../types';
import { dateToMMDDYY } from './../../utils/helpers';

function GameLogRow({ gameLog }: { gameLog: GameLog }) {
  const {
    GAME_DATE,
    MATCHUP,
    MIN,
    PTS,
    REB,
    AST,
    STL,
    BLK,
    TOV,
    PLUS_MINUS,
    FGM,
    FGA,
    FG3M,
    FG3A,
    OREB,
    DREB,
    PF,
  } = gameLog;
  return (
    <tr>
      <td>{dateToMMDDYY(GAME_DATE)}</td>
      <td>{MATCHUP.split(' ').slice(1).join(' ')}</td>
      <td>{MIN.toFixed(2)}</td>
      <td>{PTS}</td>
      <td>{REB}</td>
      <td>{AST}</td>
      <td>{STL}</td>
      <td>{BLK}</td>
      <td>{TOV}</td>
      <td>{PLUS_MINUS}</td>
      <td>{`${FGM}/${FGA}`}</td>
      <td>{`${FG3M}/${FG3A}`}</td>
      <td>{OREB}</td>
      <td>{DREB}</td>
      <td>{PF}</td>
    </tr>
  );
}

export default GameLogRow;
