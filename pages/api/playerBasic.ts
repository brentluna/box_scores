export default async (req, res) => {
  const { playerID } = req.query;
  try {
    const profile = await fetchPlayerProfile(playerID);
    const gamelog = await fetchPlayerGameLog(playerID);
    res.statusCode = 200;
    res.json({ profile, gamelog });
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.json({ error });
  }
};

const fetchPlayerProfile = async (playerID: string) => {
  const url = `https://data.nba.net/10s/prod/v1/2019/players/${playerID}_profile.json`;
  const res = await fetch(url);
  const json = await res.json();

  const {
    regularSeason: { season },
  } = json.league.standard.stats;

  return season.map((el) => {
    const { total, seasonYear } = el;
    return { seasonYear, ...total };
  });
};

const fetchPlayerGameLog = async (playerID: string) => {
  const url = `https://data.nba.net/10s/prod/v1/2019/players/${playerID}_gamelog.json`;
  const res = await fetch(url);
  const json = await res.json();
  const {
    league: { standard },
  } = json;

  return standard.map((game) => {
    const { stats, gameDateUTC, gameUrlCode, vTeam, hTeam } = game;
    const homeTeamCode = gameUrlCode.split('/')[1].slice(0, 3);
    const visitTeamCode = gameUrlCode.split('/')[1].slice(3);
    const matchup = `${homeTeamCode} @ ${visitTeamCode}`;
    const score = `${vTeam.score} - ${hTeam.score}`;
    return {
      ...stats,
      gameDateUTC,
      matchup,
      score,
    };
  });
};
