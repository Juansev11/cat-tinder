import { useEffect } from 'react';

import { Button, Text } from '@/components/Elements';
import { ConfigurationMenu } from '@/features/config/components/ConfigurationMenu/ConfigurationMenu';
import { ConfigScreens } from '@/features/config/types/Config';
import useStore, { StoreState } from '@/store/useStore';

import { useGetGameCat } from '../../api';
import { GameCards } from '../GameCards/GameCards';
import { GameResults } from '../GameResults/GameResults';

const currentScreenSelector = (state: StoreState) => state.currentScreen;

export const GameScreens = () => {
  const { data, isLoading, fetchMore } = useGetGameCat();
  const currentScreen = useStore(currentScreenSelector);

  useEffect(() => {
    if (currentScreen === ConfigScreens.RESULTS) {
      fetchMore();
    }
  }, [currentScreen, fetchMore]);

  if (!isLoading && !data) {
    return (
      <>
        <Text variant="lg" weight="bold">
          There seems to be an error, please try again.
        </Text>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </>
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
          {currentScreen === ConfigScreens.RESULTS && <GameResults />}
        </>
      )}
    </>
  );
};
