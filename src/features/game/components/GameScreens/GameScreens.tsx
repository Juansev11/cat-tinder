import { Text } from '@/components/Elements';
import { ConfigurationMenu } from '@/features/config/components/ConfigurationMenu/ConfigurationMenu';
import { ConfigScreens } from '@/features/config/types/Config';
import useStore, { StoreState } from '@/store/useStore';

import { useGetGameCat } from '../../api';
import { GameCards } from '../GameCards/GameCards';

const currentScreenSelector = (state: StoreState) => state.currentScreen;

export const GameScreens = () => {
  const { data, isLoading, fetchMore } = useGetGameCat();
  const currentScreen = useStore(currentScreenSelector);

  if (!isLoading && !data) {
    return (
      <Text variant="lg" weight="bold">
        Sorry for the inconvenience, but the game cannot be played
      </Text>
    );
  }

  return (
    <>
      {data && (
        <>
          {currentScreen === ConfigScreens.START && (
            <ConfigurationMenu initialImage={data[0].url} />
          )}
          {currentScreen === ConfigScreens.GAME && (
            <GameCards initialImage={data[0].url} fetchMore={fetchMore} />
          )}
        </>
      )}
    </>
  );
};
