// //schedule
// request url: https://secure.espn.com/core/nba/schedule?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
// request url: https://secure.espn.com/core/nba/scoreboard?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full

export default async (req, res) => {
  const {
    query: { date },
  } = req;
  // const url = `https://secure.espn.com/core/nba/schedule${
  // date ? `/_/date/${date}` : ''
  // }?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full`;

  const url =
    'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';
  const resp = await fetch(url);
  const data = await resp.json();
  // const {
  //   content: { schedule },
  // } = data;
  // const games = schedule[date].games;
  const games = data.events;

  const formattedGames = games.map((game) => formatGame(game));
  res.statusCode = 200;
  res.json(formattedGames);
};

const formatGame = (game) => {
  const { date, id, status, competitions } = game;
  const { competitors, broadcasts } = competitions[0];
  const teams = competitors.map((team) => formatTeam(team));
  const vTeam = teams.find((team) => team.homeAway == 'away');
  const hTeam = teams.find((team) => team.homeAway == 'home');
  return {
    id,
    date,
    status,
    vTeam,
    hTeam,
    natlBroadcast: formatBroadcast(broadcasts),
  };
};

const formatBroadcast = (broadcasts) => {
  const natl = broadcasts.find((cast) => cast.market === 'national');
  return natl ? natl.names : [];
};

const formatTeam = (competitor) => {
  const {
    score,
    homeAway,
    winner,
    id,
    team: { displayName, abbreviation, shortDisplayName, logo },
  } = competitor;
  return {
    id,
    score,
    homeAway,
    winner,
    displayName,
    abbreviation,
    shortDisplayName,
    logo,
  };
};
