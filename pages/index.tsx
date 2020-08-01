import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import { getScoreboard } from './../utils/apis/schedule';
import Schedule from './../components/schedule/Schedule';

const gameDate = '07/31/2020';
export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Box Scores</h2>
        <div>Date picker</div>
      </header>
      <Schedule schedule={props.schedule} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const schedule = await getScoreboard();
  return { props: { schedule } };
};
