import { Card } from '@/components/Elements';
import { CardContent } from '@/components/Elements/Card/Card.styles';

import { GameActions } from '../GameActions/GameActions';
import { GameCountdown } from '../GameCountdown/GameCountdown';

import { GameCountdownContainer } from './GameCards.styles';

export const GameCards: React.FC<unknown> = () => {
  return (
    <Card image="https://i.pinimg.com/736x/2f/86/c9/2f86c98e8f3d61b53931d8ad03e06374.jpg">
      <GameCountdownContainer>
        <GameCountdown />
      </GameCountdownContainer>
      <CardContent>
        <GameActions />
      </CardContent>
    </Card>
  );
};
