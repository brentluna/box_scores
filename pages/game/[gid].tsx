import { getBoxscore } from './../../utils/apis/boxscore';
import { GetServerSideProps } from 'next';
import BoxScore from './../../components/box_score/BoxScore';
import { useState } from 'react';
import styles from './../../styles/Game.module.css';
import Header from '../../components/header/Header';
import { useRouter } from 'next/router';
import ScheduleTime from './../../components/schedule/ScheduleTime';
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from 'react-js-pull-to-refresh';

function Game({ gameData, gid }) {
  const [isHomeTeam, setHomeTeam] = useState(false);
  const [game, setGame] = useState(gameData);
  const router = useRouter();
  const handleRefresh = () => {
    return new Promise((resolve) => {
      getBoxscore(gid).then((res) => {
        setGame(res);
        resolve();
      });
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
          <button className={styles.scheduleButton} onClick={router.back}>
            Back
          </button>
        </Header>
        <main>
          <div className={styles.teamButtonWrapper}>
            <button
              onClick={() => setHomeTeam(false)}
              className={`${styles.teamButton} ${!isHomeTeam && styles.active}`}
            >
              <div className={styles.teamName}>
                {game.vTeam.shortDisplayName}
              </div>
              <div className={styles.scoreWrapper}>
                {/* <span
                  className={styles.record}
                >{`(${game.vTeam.win}-${game.vTeam.loss})`}</span> */}
                {/* <span className={styles.score}>{game.vTeam.score}</span> */}
              </div>
            </button>
            <div className={styles.timeWrapper}>
              <ScheduleTime gameStatus={game.status} align="center" />
              {/* <ScheduleTime
                startTimeUTC={game.startTimeUTC}
                clock={game.clock}
                period={game.period}
                isGameActivated={game.isGameActivated}
                align="center"
              /> */}
              <div>
                <span>{game.vTeam.score}</span> -{' '}
                <span>{game.hTeam.score}</span>
              </div>
            </div>
            <button
              onClick={() => setHomeTeam(true)}
              className={`${styles.teamButton} ${isHomeTeam && styles.active}`}
            >
              <div className={styles.teamName}>
                {game.hTeam.shortDisplayName}
              </div>
              <div className={styles.scoreWrapper}>
                {/* <span className={styles.score}>{game.hTeam.score}</span> */}
                {/* <span
                  className={styles.record}
                >{`(${game.hTeam.win}-${game.hTeam.loss})`}</span> */}
              </div>
            </button>
          </div>
          <BoxScore stats={isHomeTeam ? game.hTeam.stats : game.vTeam.stats} />
        </main>
      </div>
    </PullToRefresh>
  );
}

export default Game;

export const getServerSideProps = async ({
  params,
}: {
  params: { gid: string };
}) => {
  const { gid } = params;

  const gameData = await getBoxscore(gid);

  return { props: { gameData, gid } };
};
