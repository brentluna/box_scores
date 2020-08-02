export interface Team {
  teamID: number;
  win: number;
  loss: number;
  simpleName: string;
  location: string;
  teamName: string;
}

export interface TeamGameInfo {
  score: number;
  seriesWin: number;
  seriesLoss: number;
}

export type TeamWithGameInfo = Team & TeamGameInfo;

export interface Game {
  gameId: number;
  startTimeUTC: string;
  isGameActivated: boolean;
  clock: string;
  vTeam: TeamWithGameInfo;
  hTeam: TeamWithGameInfo;
  period: Period;
}

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
