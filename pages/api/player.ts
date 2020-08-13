// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { playerID } = req.query;
  console.log('Inside api: ', playerID);
  try {
    const data = await fetchIt(playerID);
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
};

export const fetchIt = async (playerID: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Pragma', 'no-cache');
  myHeaders.append('Cache-Control', 'no-cache');
  myHeaders.append('Accept', 'application/json, text/plain, */*');
  myHeaders.append('x-nba-stats-token', 'true');
  myHeaders.append(
    'User-Agent',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4221.4 Safari/537.36'
  );
  myHeaders.append('x-nba-stats-origin', 'stats');
  myHeaders.append('Referer', 'https://stats.nba.com/player');
  myHeaders.append('Accept-Language', 'en-US,en;q=0.9');
  myHeaders.append('Cookie', 'xxxxx');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    const res = await fetch(
      `https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=${playerID}&PlusMinus=N&Rank=N&Season=2019-20&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`,
      requestOptions
    );
    console.log('Stats.NBA Res:', res);
    const json = await res.json();
    console.log('Stats.NBA ResJSON:', json);
    const data = json.resultSets.map((set) => {
      const { headers, rowSet } = set;
      return rowsToObjects(headers, rowSet);
    });
    return data;
  } catch (error) {
    console.log('fetchIt Error: ', error);
    return {};
  }
};

const rowsToObjects = (headers, rows) => {
  return rows.reduce((acc, e, idx) => {
    acc.push(
      headers.reduce((r, h, i) => {
        r[h] = e[i];
        return r;
      }, {})
    );
    return acc;
  }, []);
};
