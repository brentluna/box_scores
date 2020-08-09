export interface Team {
  teamID: number;
  win: number;
  loss: number;
  simpleName: string;
  location: string;
  teamName: string;
  triCode?: string;
}

export interface TeamGameInfo {
  score: string;
  seriesWin: number;
  seriesLoss: number;
}

export type TeamWithGameInfo = Team & TeamGameInfo;

export type TeamWithGameStats = TeamWithGameInfo & {
  playerStats: Array<PlayerStats>;
};

export interface Game {
  gameId: number;
  startTimeUTC: string;
  isGameActivated: boolean;
  clock: string;
  vTeam: TeamWithGameInfo | TeamWithGameStats;
  hTeam: TeamWithGameInfo | TeamWithGameStats;
  period: Period;
  natlBroadcast?: Array<string>;
}
export interface GameStats {}

export interface Period {
  current: number;
  type: number;
  maxRegular: number;
  isHalftime: boolean;
  isEndOfPeriod: boolean;
}

export interface TeamStats {
  fastBreakPoints: string;
  pointsInPaint: string;
  biggestLead: string;
  secondChancePoints: string;
  pointsOffTurnovers: string;
  longestRun: string;
  totals: {
    points: string;
    fgm: string;
    fga: string;
    fgp: string;
    ftm: string;
    fta: string;
    ftp: string;
    tpm: string;
    tpa: string;
    tpp: string;
    offReb: string;
    defReb: string;
    totReb: string;
    assists: string;
    pFouls: string;
    steals: string;
    turnovers: string;
    blocks: string;
    plusMinus: string;
    min: string;
    short_timeout_remaining: string;
    full_timeout_remaining: string;
    team_fouls: string;
  };
}

export interface PlayerStats {
  personId: string;
  firstName: string;
  lastName: string;
  jersey: string;
  teamId: string;
  isOnCourt: boolean;
  points: string;
  pos: string;
  position_full: string;
  player_code: string;
  min: string;
  fgm: string;
  fga: string;
  fgp: string;
  ftm: string;
  fta: string;
  ftp: string;
  tpm: string;
  tpa: string;
  tpp: string;
  offReb: string;
  defReb: string;
  totReb: string;
  assists: string;
  pFouls: string;
  steals: string;
  turnovers: string;
  blocks: string;
  plusMinus: string;
  dnp: string;
  sortKey: {
    name: number;
    pos: number;
    points: number;
    min: number;
    fgm: number;
    fga: number;
    fgp: number;
    ftm: number;
    fta: number;
    ftp: number;
    tpm: number;
    tpa: number;
    tpp: number;
    offReb: number;
    defReb: number;
    totReb: number;
    assists: number;
    pFouls: number;
    steals: number;
    turnovers: number;
    blocks: number;
    plusMinus: number;
  };
}

export interface GameLog {
  SEASON_YEAR: string;
  PLAYER_ID: number;
  PLAYER_NAME: string;
  TEAM_ID: number;
  TEAM_ABBREVIATION: string;
  TEAM_NAME: string;
  GAME_ID: string;
  GAME_DATE: string;
  MATCHUP: string;
  WL: string;
  MIN: number;
  FGM: number;
  FGA: number;
  FG_PCT: number;
  FG3M: number;
  FG3A: number;
  FG3_PCT: number;
  FTM: number;
  FTA: number;
  FT_PCT: number;
  OREB: number;
  DREB: number;
  REB: number;
  AST: number;
  TOV: number;
  STL: number;
  BLK: number;
  BLKA: number;
  PF: number;
  PFD: number;
  PTS: number;
  PLUS_MINUS: number;
  NBA_FANTASY_PTS: number;
  DD2: number;
  TD3: number;
  GP_RANK: number;
  W_RANK: number;
  L_RANK: number;
  W_PCT_RANK: number;
  MIN_RANK: number;
  FGM_RANK: number;
  FGA_RANK: number;
  FG_PCT_RANK: number;
  FG3M_RANK: number;
  FG3A_RANK: number;
  FG3_PCT_RANK: number;
  FTM_RANK: number;
  FTA_RANK: number;
  FT_PCT_RANK: number;
  OREB_RANK: number;
  DREB_RANK: number;
  REB_RANK: number;
  AST_RANK: number;
  TOV_RANK: number;
  STL_RANK: number;
  BLK_RANK: number;
  BLKA_RANK: number;
  PF_RANK: number;
  PFD_RANK: number;
  PTS_RANK: number;
  PLUS_MINUS_RANK: number;
  NBA_FANTASY_PTS_RANK: number;
  DD2_RANK: number;
  TD3_RANK: number;
}
