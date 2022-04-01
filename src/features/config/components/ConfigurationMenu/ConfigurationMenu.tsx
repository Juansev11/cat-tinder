import { useCallback } from 'react';

import { Button, Card } from '@/components/Elements';
import { CardContent, CardImage } from '@/components/Elements/Card/Card.styles';
import { InputField } from '@/components/Form/InputField/InputField';
import useStore, { StoreState } from '@/store/useStore';

import { ConfigScreens } from '../../types/Config';

import { ConfigurationContainer } from './ConfigurationMenu.styles';

type ConfigurationMenuProps = {
  initialImage: string;
} & React.ComponentPropsWithoutRef<'div'>;

const setSelectedSecondsSelector = (state: StoreState) => state.setSelectedSeconds;
const setCurrentScreenSelector = (state: StoreState) => state.setCurrentScreen;
const selectedSecondsSelector = (state: StoreState) => state.selectedSeconds;

export const ConfigurationMenu: React.FC<ConfigurationMenuProps> = ({ initialImage }) => {
  const setSelectedSeconds = useStore(setSelectedSecondsSelector);
  const setCurrentScreen = useStore(setCurrentScreenSelector);
  const selectedSeconds = useStore(selectedSecondsSelector);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedSeconds(e.target.value);
    },
    [setSelectedSeconds]
  );

  const handleStartGameClick = useCallback(() => {
    setCurrentScreen(ConfigScreens.GAME);
  }, [setCurrentScreen]);

  return (
    <Card>
      <CardImage src={initialImage} />
      <CardContent>
        <ConfigurationContainer>
          <Button onClick={handleStartGameClick}>Start Game</Button>
          <InputField
            label="Seconds"
            id="seconds"
            name="seconds"
            type="number"
            onChange={handleInputChange}
            value={selectedSeconds}
          />
        </ConfigurationContainer>
      </CardContent>
    </Card>
  );
};
