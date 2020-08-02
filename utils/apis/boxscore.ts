// http://data.nba.net/10s/prod/v1/20200801/0021901239_boxscore.json
import { dateToYYYYMMDD } from './../helpers';
import { formatGame } from './schedule';

export const getBoxscore = async (date: Date, gameId: string) => {
  const formattedDate = dateToYYYYMMDD(date);
  const url = `https://data.nba.net/10s/prod/v1/${formattedDate}/${gameId}_boxscore.json`;
  const res = await fetch(url);
  const json = await res.json();

  return formatBoxscore(json);
};

const formatBoxscore = (res) => {
  const gameData = formatGame(res.basicGameData);
  const stats = res && res.stats;
  const teamKeys = ['vTeam', 'hTeam'];

  // stats isn't included in res if the game hasn't started
  const players = stats && playersByTeamId(res.stats.activePlayers);

  teamKeys.forEach((key) => {
    const team = gameData[key];
    team.playerStats = stats ? players[team.teamId] : [];
  });
  return gameData;
};

const playersByTeamId = (players) => {
  return players.reduce((acc, el) => {
    if (!acc[el.teamId]) acc[el.teamId] = [];
    acc[el.teamId].push(el);
    return acc;
  }, {});
};
