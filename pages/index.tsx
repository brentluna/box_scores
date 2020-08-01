import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NBA from 'nba';
import { InferGetServerSidePropsType } from 'next';
import { getScoreboard } from './../utils/apis/schedule';
import Schedule from './../components/schedule/Schedule';

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
      <section>
        <h3>Games</h3>
        <div>
          <Schedule schedule={props.schedule} />
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps = async () => {
  // const sched = await NBA.stats.scoreboard({ gameDate });
  const schedule = await getScoreboard();
  console.log(schedule);
  return { props: { schedule } };
};
