import { useEffect, useCallback, useState } from 'react';

import { Card } from '@/components/Elements';
import { CardContent } from '@/components/Elements/Card/Card.styles';

import { useGetGameCat } from '../../api';
import { GameActions } from '../GameActions/GameActions';
import { GameCountdown } from '../GameCountdown/GameCountdown';

import {
  GameCardImage,
  GameCardImageList,
  GameCardImageTop,
  GameCountdownContainer,
} from './GameCards.styles';

type GameCardsProps = {
  initialImage: string;
  fetchMore: () => void;
} & React.ComponentPropsWithoutRef<'article'>;

export const GameCards: React.FC<GameCardsProps> = ({ initialImage }) => {
  const [currentCard, setCurrentCard] = useState(initialImage);
  const [nextCard, setNextCard] = useState<string>();
  const { data, fetchMore } = useGetGameCat();

  useEffect(() => {
    if (data) {
      setNextCard(data[0].url);
    }
  }, [setNextCard, data]);

  const handleOnActionButtonClick = useCallback(() => {
    if (nextCard) {
      setCurrentCard(nextCard);
      fetchMore();
    }
  }, [nextCard, fetchMore]);

  return (
    <Card>
      <GameCardImageList>
        {currentCard && <GameCardImageTop src={currentCard} />}
        {nextCard && <GameCardImage src={nextCard} />}
      </GameCardImageList>
      <GameCountdownContainer>
        <GameCountdown />
      </GameCountdownContainer>
      <CardContent>
        <GameActions onActionButtonClick={handleOnActionButtonClick} />
      </CardContent>
    </Card>
  );
};
