import { formatGame } from '../../../utils/apis/schedule';

// Request URL: https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/4065635/gamelog?region=us&lang=en&contentorigin=espn
export default async (req, res) => {
  const {
    query: { playerID },
  } = req;
  const url = `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID}/gamelog?region=us&lang=en&contentorigin=espn`;
  const resp = await fetch(url);
  const data = await resp.json();
  const { labels, events, seasonTypes } = data;
  const formattedEvents = joinEventsAndSeasonTypes(events, seasonTypes);
  const formattedData = formatGameLogs(formattedEvents, labels);
  res.statusCode = 200;
  res.json(formattedData);
};

const makeStatsObj = (labels, stats) => {
  return labels.reduce((acc, el, idx) => {
    acc[el] = stats[idx];
    return acc;
  }, {});
};

const formatGameLogs = (events, labels) => {
  return Object.values(events)
    .map((el) => {
      const { id, stats } = el;

      return {
        ...el,
        stats: makeStatsObj(labels, stats),
      };
    }, {})
    .reverse();
};

const joinEventsAndSeasonTypes = (events, seasonTypes) => {
  const formattedEvents = Object.values(events).reduce((acc, event) => {
    const {
      id,
      atVs,
      score,
      gameResult,
      gameDate,
      team: { abbreviation, logo, id: teamId },
      opponent: { id: oppId, abbreviation: oppAbbreviation, logo: oppLogo },
    } = event;
    acc[id] = {
      id,
      atVs,
      score,
      gameResult,
      abbreviation,
      logo,
      teamId,
      oppId,
      oppAbbreviation,
      oppLogo,
      gameDate,
    };
    return acc;
  }, {});
  seasonTypes.forEach((st) => {
    st.categories.forEach((cat) => {
      cat.events.forEach((event) => {
        const { stats, eventId } = event;
        formattedEvents[eventId] = { ...formattedEvents[eventId], stats };
      });
    });
  });
  return formattedEvents;
};
