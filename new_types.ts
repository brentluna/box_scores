export interface Game {
  id: string;
  date: string;
  status: GameStatus;
  vTeam: Team;
  hTeam: Team;
  natlBroadcast: Array<string>;
}

export interface GameStatus {
  period: number;
  displayClock: string;
  clock: number;
  type: {
    name: string;
    description: string;
    id: string;
    state: string;
    completed: true;
    detail: string;
    shortDetail: string;
  };
}

export interface Team {
  id: string;
  score?: string;
  homeAway?: string;
  winner?: boolean;
  displayName: string;
  abbreviation: string;
  shortDisplayName: string;
  logo: string;
}

export interface PlayerStats {
  id: string;
  shortName: string;
  displayName: string;
  MIN: string;
  FG: string;
  '3PT': string;
  FT: string;
  OREB: string;
  DREB: string;
  REB: string;
  AST: string;
  STL: string;
  BLK: string;
  TO: string;
  PF: string;
  '+/-': string;
  PTS: string;
}

export interface GameLog {
  id: string;
  atVs: string;
  score: string;
  gameResult: string;
  abbreviation: string;
  logo: string;
  teamId: string;
  oppId: string;
  oppAbbreviation: string;
  oppLogo: string;
  gameDate: string;
  stats: {
    MIN: string;
    FG: string;
    'FG%': string;
    '3PT': string;
    '3P%': string;
    FT: string;
    'FT%': string;
    REB: string;
    AST: string;
    BLK: string;
    STL: string;
    PF: string;
    TO: string;
    PTS: string;
  };
}
