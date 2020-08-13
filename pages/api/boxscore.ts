// //schedule
// request url: https://secure.espn.com/core/nba/schedule?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
// request url: https://secure.espn.com/core/nba/scoreboard?xhr=1&render=true&device=desktop&country=us&lang=en&region=us&site=espn&edition-host=espn.com&site-type=full
//401224779
export default async (req, res) => {
  const { gameID } = req.query;
  const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${gameID}`;
  const resp = await fetch(url);
  const data = await resp.json();
  res.statusCode = 200;
  res.json({ data });
};
