import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import { getScoreboard } from './../utils/apis/schedule';
import Schedule from './../components/schedule/Schedule';
import { useState, useEffect, useRef, createContext } from 'react';
import DatePicker from './../components/date_picker/DatePicker';
import Header from '../components/header/Header';
import ToggleSwitch from './../components/toggle_switch/ToggleSwitch';
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from 'react-js-pull-to-refresh';

const useSchedule = (schedule) => {
  const firstUpdate = useRef(true);
  const [date, setDate] = useState(() =>
    new Date(schedule.date).toLocaleDateString()
  );
  const [games, setGames] = useState(schedule.games);
  const updateGames = async () => {
    const res = await getScoreboard(new Date(date));
    setGames(res.games);
    return true;
  };
  useEffect(() => {
    // dont' fetch on mount as it' served already
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    updateGames();
  }, [date]);

  useEffect(() => {
    typeof window && window.addEventListener('focus', updateGames);
    return () => {
      typeof window && window.removeEventListener('focus', updateGames);
    };
  }, []);

  return { date, setDate, games, setGames, updateGames };
};

export const ShowScoresContext = createContext(null);

export default function Home({
  schedule,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { date, setDate, games, updateGames } = useSchedule(schedule);
  const [showScores, setShowScores] = useState(true);

  const handleRefresh = () => {
    return new Promise((resolve) => {
      updateGames().then((res) => resolve());
    });
  };
  return (
    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      onRefresh={handleRefresh}
      triggerHeight={100}
      backgroundColor="#383e56"
    >
      <div>
        <Header>
          <div className={styles.controlsWrapper}>
            <ToggleSwitch
              checked={showScores}
              onChange={() => setShowScores(!showScores)}
            />
            <DatePicker date={date} setDate={setDate} />
          </div>
        </Header>
        <main className={styles.main}>
          <ShowScoresContext.Provider value={showScores}>
            <Schedule games={games} date={date} />
          </ShowScoresContext.Provider>
        </main>
      </div>
    </PullToRefresh>
  );
}

export const getServerSideProps = async () => {
  const date = new Date();
  const utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  const usDate = new Date(utcDate);

  const schedule = await getScoreboard(usDate);
  return { props: { schedule } };
};
