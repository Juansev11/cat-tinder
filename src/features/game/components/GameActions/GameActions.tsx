import { Dislike } from '@/components/Icons/Dislike';
import { Like } from '@/components/Icons/Like';
import { Skip } from '@/components/Icons/Skip';
import useStore, { StoreState } from '@/store/useStore';

import { GameListKey } from '../../types/Game';

import { GameActionsContainer, GameActionsButton } from './GameActions.styles';

type GameActionsProps = {
  onActionButtonClick: () => void;
} & React.ComponentPropsWithoutRef<typeof GameActionsContainer>;

const addToListByKeySelector = (state: StoreState) => state.addToListByKey;

export const GameActions: React.FC<GameActionsProps> = ({ onActionButtonClick }) => {
  const addToListByKey = useStore(addToListByKeySelector);

  const handleActionButtonClick = (gameListKey: GameListKey) => {
    addToListByKey(gameListKey);
    onActionButtonClick();
  };

  return (
    <GameActionsContainer>
      <GameActionsButton
        variant="icon"
        onClick={() => handleActionButtonClick(GameListKey.DISLIKE)}
      >
        <Dislike />
      </GameActionsButton>
      <GameActionsButton variant="icon" onClick={() => handleActionButtonClick(GameListKey.SKIP)}>
        <Skip />
      </GameActionsButton>
      <GameActionsButton variant="icon" onClick={() => handleActionButtonClick(GameListKey.LIKE)}>
        <Like />
      </GameActionsButton>
    </GameActionsContainer>
  );
};
