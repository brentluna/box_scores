// Request URL: https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/4065635/gamelog?region=us&lang=en&contentorigin=espn
export default async (req, res) => {
  const { playerID } = req.query;
  const url = `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID}/gamelog?region=us&lang=en&contentorigin=espn`;
  const resp = await fetch(url);
  const data = await resp.json();
  res.statusCode = 200;
  res.json({ data });
};
