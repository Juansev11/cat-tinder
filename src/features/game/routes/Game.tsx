import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

import { GameScreens } from '../components/GameScreens/GameScreens';

type GameProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

export const Game: React.FC<GameProps> = () => {
  return (
    <ContentLayout>
      <Text as="h1" variant="xl">
        Tinder for Cats!
      </Text>
      <GameScreens />
    </ContentLayout>
  );
};
