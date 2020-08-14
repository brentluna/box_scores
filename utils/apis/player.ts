export const getGameLogs = async (playerID: string) => {
  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'http://boxscores.vercel.app';
  const url = `${host}/api/game_logs/${playerID}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

// fetch(
//   'https://cors-anywhere.herokuapp.com/site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes',
//   {
//     headers: {
//       accept: '*/*',
//       'accept-language': 'en-US,en;q=0.9',
//       'cache-control': 'no-cache',
//       pragma: 'no-cache',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-site',
//       origin: 'https://www.espn.com/',
//       'x-requested-with': 'https://www.espn.com/',
//     },
//     referrer: 'https://www.espn.com/',
//     referrerPolicy: 'strict-origin-when-cross-origin',
//     body: null,
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'omit',
//   }
// )
//   .then((r) => r.json())
//   .then((r) => console.log(r));

// const options = {
//   headers: {
//     accept: '*/*',
//     'accept-language': 'en-US,en;q=0.9',
//     'cache-control': 'no-cache',
//     pragma: 'no-cache',
//     'sec-fetch-dest': 'empty',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-site': 'same-site',
//     origin: 'https://www.espn.com/',
//     'x-requested-with': 'https://www.espn.com/',
//   },
//   referrer: 'https://www.espn.com/',
//   referrerPolicy: 'strict-origin-when-cross-origin',
//   body: null,
//   method: 'GET',
//   mode: 'cors',
//   credentials: 'omit',
// };

// export const fetchPlayer = async (playerId: string) => {
//   // const url = `https://cors-anywhere.herokuapp.com/site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerId}/gamelog?region=us&lang=en&contentorigin=espn`;
//   // const url = `https://cors-anywhere.herokuapp.com/site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/3032977/gamelog?region=us&lang=en&contentorigin=espn`;
//   const url = `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/3032977/gamelog?region=us&lang=en&contentorigin=espn`;
//   const res = await fetch(url, {
//     headers: {
//       accept: '*/*',
//       'accept-language': 'en-US,en;q=0.9',
//       'cache-control': 'no-cache',
//       pragma: 'no-cache',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-site',
//       origin: 'https://www.espn.com/',
//       'x-requested-with': 'https://www.espn.com/',
//     },
//     referrer: 'https://www.espn.com/',
//     referrerPolicy: 'strict-origin-when-cross-origin',
//     body: null,
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'omit',
//   });

//   const json = await res.json();
//   console.log(json);
//   return json;
// };

// export const fetchPlayer2 = async () => {
//   const res = await fetch(
//     'https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=1627747&PlusMinus=N&Rank=N&Season=2019-20&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision='
//   );
//   const json = await res.json();
//   console.log(json);
//   return json;
// };
// export const fetchPlayer3 = async () => {
//   const res = await fetch(
//     'https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=1627747&PlusMinus=N&Rank=N&Season=2019-20&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=',
//     {
//       headers: {
//         accept: 'application/json, text/plain, */*',
//         'accept-language': 'en-US,en;q=0.9',
//         'cache-control': 'no-cache',
//         pragma: 'no-cache',
//         'sec-fetch-dest': 'empty',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-site': 'same-origin',
//         'x-nba-stats-origin': 'stats',
//         'x-nba-stats-token': 'true',
//       },
//       referrer: 'https://stats.nba.com/player/1627747/boxscores-traditional/',
//       referrerPolicy: 'strict-origin-when-cross-origin',
//       body: null,
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//     }
//   );
//   const json = await res.json();
//   console.log(json);
//   return json;
// };
