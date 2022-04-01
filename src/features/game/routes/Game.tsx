import { ContentLayout } from '@/components/Layout';

import { GameScreens } from '../components/GameScreens/GameScreens';

type GameProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

export const Game: React.FC<GameProps> = () => {
  return (
    <ContentLayout>
      <h1>Tinder for Cats!</h1>
      <GameScreens />
    </ContentLayout>
  );
};
