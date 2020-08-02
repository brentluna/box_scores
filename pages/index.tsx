import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import { getScoreboard } from './../utils/apis/schedule';
import Schedule from './../components/schedule/Schedule';
import { useState, useEffect, useRef } from 'react';
import DatePicker from './../components/date_picker/DatePicker';
import Header from '../components/header/Header';

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
    <div>
      <Header>
        <DatePicker date={date} setDate={setDate} />
      </Header>
      <main className={styles.main}>
        <Schedule games={games} date={date} />
      </main>
    </div>
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
