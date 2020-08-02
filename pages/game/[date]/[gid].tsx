import { getBoxscore } from './../../../utils/apis/boxscore';
import { GetServerSideProps } from 'next';

function Game({ game }) {
  return (
    <div>
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </div>
  );
}

export default Game;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: {
  params: { date: string; gid: string };
}) => {
  const { date, gid } = params;
  const dateObj = new Date(date.replace(/_/g, '/'));

  const game = await getBoxscore(dateObj, gid);
  return { props: { game } };
};
