// "todayScoreboard": "/prod/v1/20200801/scoreboard.json",
import { dateToYYYYMMDD } from './../helpers';
import teams from './../../teams';
import { Game } from './../../types';

export const getScoreboard = async (date = new Date()) => {
  const formattedDate = dateToYYYYMMDD(date);
  const url = `https://data.nba.net/10s/prod/v1/${formattedDate}/scoreboard.json`;
  const res = await fetch(url);
  const json = await res.json();

  return { games: formatGames(json), date: date.toLocaleDateString() };
};

export const formatTeam = (team) => {
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

export const formatGame = (game) => {
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
};
const formatGames = (res): Array<Game> => {
  return res.games.map(formatGame);
};
