export default async (req, res) => {
  try {
    const teamsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`;
    const resp = await fetch(teamsURL);
    const data = await resp.json();
    console.log({ data });
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
};
