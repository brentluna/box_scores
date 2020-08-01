// "todayScoreboard": "/prod/v1/20200801/scoreboard.json",
import { dateToYYYYMMDD } from './../helpers';
import teams from './../../teams';
import { Game } from './../../types';

export const getScoreboard = async (date = new Date()) => {
  const formattedDate = dateToYYYYMMDD(date);
  const url = `http://data.nba.net/10s/prod/v1/${formattedDate}/scoreboard.json`;
  const res = await fetch(url);
  const json = await res.json();

  return formatGames(json);
};

const formatTeam = (team) => {
  const { teamId, win, loss, seriesWin, seriesLoss, score } = team;
  return {
    ...teams[teamId],
    win,
    loss,
    seriesWin,
    seriesLoss,
    score,
  };
};

const formatGames = (res): Array<Game> => {
  return res.games.map((game) => {
    const {
      startTimeUTC,
      clock,
      vTeam,
      hTeam,
      gameId,
      period,
      isGameActivated,
    } = game;
    return {
      gameId,
      isGameActivated,
      startTimeUTC,
      clock,
      period,
      vTeam: formatTeam(vTeam),
      hTeam: formatTeam(hTeam),
    };
  });
};
