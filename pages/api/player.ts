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
// myHeaders.append(
//   'Cookie',
//   'ak_bmsc=52AFCFA6D26A972381BF12D54D35E85DB81960B5FA3D00001B2E305F5EC6BA66~pl5ENDzYcpPEEW+R4apStX7SFiGTYDYi94AF66SESqdO3/KXtjHJA5HAZX8e7FlxW5csh+brsCf5Y2I+VaZ5EF+mMLdyebKpJSLU6bzFzNQa2sI8HEyDejXYAO0Udzus1Oyzb1SIxJtrV+UpfrrdZJEV9VnlpR36cJBbovAoRwA7CPXIauJtsDnZaPUyxkKR8WFKRqK9hZcz8DsfeD8jyXhrUldK8lPG5ade0CC0w1/sA=; bm_sv=187699CBDECA03751A561653AD08FB0E~2APw6CPHtNFxyYFuZcwKfajWPYD7Y7IOe6iS/sT8SDVij+mJLRovjeKOolQHQsSXZh9jhgSx+z9sFEu6hVf+60keAqDgEQ1xlCYfhIGPyBdi9mWHTTFWW/I4ow6TTQ91DQvPEYiUJJpRrVZvT8zdwA=='
// )
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

  const res = await fetch(
    `https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=${playerID}&PlusMinus=N&Rank=N&Season=2019-20&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`,
    requestOptions
  );
  const json = await res.json();
  const data = json.resultSets.map((set) => {
    const { headers, rowSet } = set;
    return rowsToObjects(headers, rowSet);
  });
  return data;
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
