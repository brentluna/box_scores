This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Endpoint info found here http://data.nba.net/10s/prod/v1/today.json

```
// 20200801092047
// http://data.nba.net/10s/prod/v1/today.json

{
  "_internal": {
    "pubDateTime": "2020-08-01 12:00:51.064 EDT",
    "igorPath": "cron,1596297649722,1596297649722|router,1596297649722,1596297649810|domUpdater,1596297649922,1596297650716|feedProducer,1596297650948,1596297651720",
    "xslt": "NBA/xsl/league/schedule/marty_today.xsl",
    "xsltForceRecompile": "true",
    "xsltInCache": "false",
    "xsltCompileTimeMillis": "18",
    "xsltTransformTimeMillis": "49",
    "consolidatedDomKey": "prod__transform__marty_today__2903594165389",
    "endToEndTimeMillis": "1998"
  },
  "teamSitesOnly": {
    "seasonStage": 2,
    "seasonYear": 2019,
    "rosterYear": 2019,
    "statsStage": 2,
    "statsYear": 2019,
    "displayYear": "2019-20",
    "lastPlayByPlay": "/json/cms/noseason/game/{{gameDate}}/{{gameId}}/pbp_last.json",
    "allPlayByPlay": "/data/10s/json/cms/noseason/game/{{gameDate}}/{{gameId}}/pbp_all.json",
    "playerMatchup": "/data/10s/json/cms/2019/game/{{gameDate}}/{{gameId}}/playersPerGame.json",
    "series": "/data/5s/json/cms/2019/regseason/team/{{teamUrlCode}}/series.json"
  },
  "seasonScheduleYear": 2019,
  "showPlayoffsClinch": true,
  "links": {
    "anchorDate": "20200801",
    "currentDate": "20200801",
    "calendar": "/prod/v1/calendar.json",
    "todayScoreboard": "/prod/v1/20200801/scoreboard.json",
    "currentScoreboard": "/prod/v1/20200801/scoreboard.json",
    "teams": "/prod/v2/2019/teams.json",
    "scoreboard": "/prod/v2/{{gameDate}}/scoreboard.json",
    "leagueRosterPlayers": "/prod/v1/2019/players.json",
    "allstarRoster": "/prod/v1/allstar/2018/AS_roster.json",
    "leagueRosterCoaches": "/prod/v1/2019/coaches.json",
    "leagueSchedule": "/prod/v1/2019/schedule.json",
    "leagueConfStandings": "/prod/v1/current/standings_conference.json",
    "leagueDivStandings": "/prod/v1/current/standings_division.json",
    "leagueUngroupedStandings": "/prod/v1/current/standings_all.json",
    "leagueMiniStandings": "/prod/v1/current/standings_all_no_sort_keys.json",
    "leagueTeamStatsLeaders": "/prod/v1/2019/team_stats_rankings.json",
    "leagueLastFiveGameTeamStats": "/prod/v1/2019/team_stats_last_five_games.json",
    "previewArticle": "/prod/v1/{{gameDate}}/{{gameId}}_preview_article.json",
    "recapArticle": "/prod/v1/{{gameDate}}/{{gameId}}_recap_article.json",
    "gameBookPdf": "/prod/v1/{{gameDate}}/{{gameId}}_Book.pdf",
    "boxscore": "/prod/v1/{{gameDate}}/{{gameId}}_boxscore.json",
    "miniBoxscore": "/prod/v1/{{gameDate}}/{{gameId}}_mini_boxscore.json",
    "pbp": "/prod/v1/{{gameDate}}/{{gameId}}_pbp_{{periodNum}}.json",
    "leadTracker": "/prod/v1/{{gameDate}}/{{gameId}}_lead_tracker_{{periodNum}}.json",
    "playerGameLog": "/prod/v1/2019/players/{{personId}}_gamelog.json",
    "playerProfile": "/prod/v1/2019/players/{{personId}}_profile.json",
    "playerUberStats": "/prod/v1/2019/players/{{personId}}_uber_stats.json",
    "teamSchedule": "/prod/v1/2019/teams/{{teamUrlCode}}/schedule.json",
    "teamsConfig": "/prod/2019/teams_config.json",
    "teamRoster": "/prod/v1/2019/teams/{{teamUrlCode}}/roster.json",
    "teamsConfigYear": "/prod/{{seasonScheduleYear}}/teams_config.json",
    "teamScheduleYear": "/prod/v1/{{seasonScheduleYear}}/teams/{{teamUrlCode}}/schedule.json",
    "teamLeaders": "/prod/v1/2019/teams/{{teamUrlCode}}/leaders.json",
    "teamScheduleYear2": "/prod/v1/{{seasonScheduleYear}}/teams/{{teamId}}/schedule.json",
    "teamLeaders2": "/prod/v1/2019/teams/{{teamId}}/leaders.json",
    "teamICS": "/prod/teams/schedules/2019/{{teamUrlCode}}_home_schedule.ics",
    "teamICS2": "/prod/teams/schedules/2019/{{teamUrlCode}}_schedule.ics",
    "playoffsBracket": "/prod/v1/2018/playoffsBracket.json",
    "playoffSeriesLeaders": "/prod/v1/2018/playoffs_{{seriesId}}_leaders.json",
    "universalLinkMapping": "https://www.nba.com/mobile/apps/configs/prod/universalLinkMapping.json",
    "ticketLink": "https://a.data.nba.com/tickets/single/{{seasonScheduleYear}}/{{gameId}}/{{trackingId}}"
  }
}
```
