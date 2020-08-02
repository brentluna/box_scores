import { getBoxscore } from './../../../utils/apis/boxscore';
import { GetServerSideProps } from 'next';
import BoxScore from './../../../components/box_score/BoxScore';
import { useState } from 'react';
import styles from './../../../styles/Game.module.css';
import Header from '../../../components/header/Header';
import { useRouter } from 'next/router';
import ScheduleTime from './../../../components/schedule/ScheduleTime';

function Game({ game }) {
  const [isHomeTeam, setHomeTeam] = useState(false);
  const router = useRouter();
  return (
    <div>
      <Header>
        <button className={styles.scheduleButton} onClick={router.back}>
          Schedule
        </button>
      </Header>
      <main>
        <div className={styles.teamButtonWrapper}>
          <button
            onClick={() => setHomeTeam(false)}
            className={`${styles.teamButton} ${!isHomeTeam && styles.active}`}
          >
            <div className={styles.teamName}>{game.vTeam.simpleName}</div>
            <div className={styles.scoreWrapper}>
              <span
                className={styles.record}
              >{`(${game.vTeam.win}-${game.vTeam.loss})`}</span>
              {/* <span className={styles.score}>{game.vTeam.score}</span> */}
            </div>
          </button>
          <div className={styles.timeWrapper}>
            <ScheduleTime
              startTimeUTC={game.startTimeUTC}
              clock={game.clock}
              period={game.period}
              isGameActivated={game.isGameActivated}
              align="center"
            />
            <div>
              <span>{game.vTeam.score}</span> - <span>{game.hTeam.score}</span>
            </div>
          </div>
          <button
            onClick={() => setHomeTeam(true)}
            className={`${styles.teamButton} ${isHomeTeam && styles.active}`}
          >
            <div className={styles.teamName}>{game.hTeam.simpleName}</div>
            <div className={styles.scoreWrapper}>
              {/* <span className={styles.score}>{game.hTeam.score}</span> */}
              <span
                className={styles.record}
              >{`(${game.hTeam.win}-${game.hTeam.loss})`}</span>
            </div>
          </button>
        </div>
        <BoxScore team={isHomeTeam ? game.hTeam : game.vTeam} />
      </main>
    </div>
  );
}

export default Game;

export const getServerSideProps = async ({
  params,
}: {
  params: { date: string; gid: string };
}) => {
  const { date, gid } = params;
  const dateObj = new Date(date.replace(/_/g, '/'));

  const game = await getBoxscore(dateObj, gid);
  return { props: { game } };
};
