export default async (req, res) => {
  try {
    const teamsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`;
    const res = await fetch(teamsURL);
    const data = await res.json();
    console.log({ data });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
