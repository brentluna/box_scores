// //schedule
// request url: https://secure.espn.com/core/nba/schedule?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
// request url: https://secure.espn.com/core/nba/scoreboard?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
//401224779
// http://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401224783

export default async (req, res) => {
  const {
    query: { gameID },
  } = req;
  const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${gameID}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const {
    boxscore: { players, teams },
    header: { competitions },
  } = data;
  const { status, compInfo } = fomratGameInfo(competitions);
  let vTeam = compInfo.find((el) => el.homeAway === 'away');
  let hTeam = compInfo.find((el) => el.homeAway === 'home');
  const formattedTeamInfo = teams.map((team) => formatTeamInfo(team));
  formattedTeamInfo.forEach((team) => {
    if (team.id === vTeam.id) vTeam = { ...vTeam, ...team };
    if (team.id === hTeam.id) hTeam = { ...hTeam, ...team };
  });

  if (players) {
    const playerStats = players.map((el) => formatStats(el));
    vTeam.stats = playerStats[0];
    hTeam.stats = playerStats[1];
  }
  res.statusCode = 200;
  res.json({
    status,
    vTeam,
    hTeam,
  });
};

const fomratGameInfo = (data) => {
  const { competitors, status } = data[0];
  const compInfo = competitors.map((comp) => formatTeam(comp));
  return { compInfo, status };
};

const formatTeam = (competitor) => {
  const {
    score,
    homeAway,
    winner,
    team: { id, displayName, abbreviation, shortDisplayName, logo },
  } = competitor;
  return {
    id,
    score,
    homeAway,
    winner,
    logo,
  };
};

const formatTeamInfo = (data) => {
  const {
    team: { id, displayName, abbreviation, shortDisplayName, logo },
  } = data;
  return {
    id,
    displayName,
    abbreviation,
    shortDisplayName,
    logo,
  };
};

const formatStats = (data) => {
  const stats = data.statistics[0];
  const { athletes, labels } = stats;

  return athletes.map((el) => {
    const {
      stats,
      athlete: { shortName, displayName, id },
    } = el;
    return {
      id,
      shortName,
      displayName,
      ...makeStatsObj(labels, stats),
    };
  });
};

const makeStatsObj = (labels, stats) => {
  return labels.reduce((acc, el, idx) => {
    acc[el] = stats[idx];
    return acc;
  }, {});
};
