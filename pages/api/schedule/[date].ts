// //schedule
// request url: https://secure.espn.com/core/nba/schedule?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
// request url: https://secure.espn.com/core/nba/scoreboard?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full

export default async (req, res) => {
  const {
    query: { date },
  } = req;
  let games;
  if (dateIsToday(date)) {
    const url =
      'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';
    const resp = await fetch(url);
    const data = await resp.json();
    games = data.events;
  } else {
    const url = `https://secure.espn.com/core/nba/schedule${
      date ? `/_/date/${date}` : ''
    }?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full`;

    const resp = await fetch(url);
    const data = await resp.json();
    const {
      content: { schedule },
    } = data;
    games = schedule[date].games;
  }
  const formattedGames = games.map((game) => formatGame(game));
  res.statusCode = 200;
  res.json(formattedGames);
};

const dateIsToday = (date: string) => {
  let formattedStr = '';
  date.split('').forEach((el, idx) => {
    const idxs = [3, 5];
    if (idxs.includes(idx)) {
      formattedStr += `${el}-`;
    } else {
      formattedStr += el;
    }
  });
  // const todayDate = new Date().toLocaleDateString();
  const todayDate = todayPSTDate().toLocaleDateString();
  // const passedDate = new Date(
  //   Date.parse(formattedStr + 'T00:00:00')
  // ).toLocaleDateString();
  const passedDate = parsePassedDate(formattedStr).toLocaleDateString();

  console.log({ todayDate, passedDate });
  return todayDate === passedDate;
};

const parsePassedDate = (input: string) => {
  const parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])); // months are 0-based
};

const todayPSTDate = (): Date => {
  var date = new Date();
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  return new Date(utcDate);
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
