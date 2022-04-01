import { useCallback } from 'react';

import { Button, Card } from '@/components/Elements';
import { CardContent } from '@/components/Elements/Card/Card.styles';
import { InputField } from '@/components/Form/InputField/InputField';
import useStore, { MyState } from '@/store/useStore';

import { ConfigScreens } from '../../types/Config';

import { ConfigurationContainer } from './ConfigurationMenu.styles';

type ConfigurationMenuProps = React.ComponentPropsWithoutRef<'div'>;

const setSelectedSecondsSelector = (state: MyState) => state.setSelectedSeconds;
const setCurrentScreenSelector = (state: MyState) => state.setCurrentScreen;
const selectedSecondsSelector = (state: MyState) => state.selectedSeconds;

export const ConfigurationMenu: React.FC<ConfigurationMenuProps> = () => {
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
    <Card image="https://i.pinimg.com/736x/2f/86/c9/2f86c98e8f3d61b53931d8ad03e06374.jpg">
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
