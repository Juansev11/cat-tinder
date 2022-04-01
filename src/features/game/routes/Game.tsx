import { ContentLayout } from '@/components/Layout';
import { ConfigurationMenu } from '@/features/config/components/ConfigurationMenu/ConfigurationMenu';
import { ConfigScreens } from '@/features/config/types/Config';
import useStore, { StoreState } from '@/store/useStore';

import { GameCards } from '../components/GameCards/GameCards';

type GameProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

const currentScreenSelector = (state: StoreState) => state.currentScreen;

export const Game: React.FC<GameProps> = () => {
  // useFetch<Post[]>('https://api.thecatapi.com/v1/images/search?limit=5&category_ids=[1,2,3,4,5]');
  const currentScreen = useStore(currentScreenSelector);

  return (
    <ContentLayout>
      <h1>Tinder for Cats!</h1>
      {currentScreen === ConfigScreens.START && <ConfigurationMenu />}
      {currentScreen === ConfigScreens.GAME && <GameCards />}
    </ContentLayout>
  );
};
