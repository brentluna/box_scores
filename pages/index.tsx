import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NBA from 'nba';
import { InferGetServerSidePropsType } from 'next';

const gameDate = '07/31/2020';
export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props);
  return (
    <main>
      <header>
        <h2>Box Scores</h2>
        <div>Date picker</div>
      </header>
      <section>Games</section>
    </main>
  );
}

export const getServerSideProps = async () => {
  const sched = await NBA.stats.scoreboard({ gameDate });
  console.log(sched);
  return { props: { sched } };
};
