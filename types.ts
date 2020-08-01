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
