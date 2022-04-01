import { Dislike } from '@/components/Icons/Dislike';
import { Like } from '@/components/Icons/Like';
import { Skip } from '@/components/Icons/Skip';

import { GameActionsContainer, GameActionsButton } from './GameActions.styles';

type GameActionsProps = React.ComponentPropsWithoutRef<typeof GameActionsContainer>;

export const GameActions: React.FC<GameActionsProps> = () => {
  return (
    <GameActionsContainer>
      <GameActionsButton variant="icon">
        <Dislike />
      </GameActionsButton>
      <GameActionsButton variant="icon">
        <Skip />
      </GameActionsButton>
      <GameActionsButton variant="icon">
        <Like />
      </GameActionsButton>
    </GameActionsContainer>
  );
};
