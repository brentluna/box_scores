import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import { getScoreboard } from './../utils/apis/schedule';
import Schedule from './../components/schedule/Schedule';
import { useState, useEffect, useRef } from 'react';
import DatePicker from './../components/date_picker/DatePicker';

const useSchedule = (schedule) => {
  const firstUpdate = useRef(true);
  const [date, setDate] = useState(() =>
    new Date(schedule.date).toLocaleDateString()
  );
  const [games, setGames] = useState(schedule.games);

  useEffect(() => {
    // dont' fetch on mount as it' served already
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const updateGames = async () => {
      const res = await getScoreboard(new Date(date));
      setGames(res.games);
    };
    updateGames();
  }, [date]);

  return { date, setDate, games, setGames };
};

export default function Home({
  schedule,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { date, setDate, games, setGames } = useSchedule(schedule);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Box Scores</h2>
        <DatePicker date={date} setDate={setDate} />
      </header>
      <Schedule games={games} date={date} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const schedule = await getScoreboard();
  return { props: { schedule } };
};
