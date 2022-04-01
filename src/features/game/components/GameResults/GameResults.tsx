import { Button, Card, Text } from '@/components/Elements';
import { CardContent } from '@/components/Elements/Card/Card.styles';
import { Dislike } from '@/components/Icons/Dislike';
import { Like } from '@/components/Icons/Like';
import { Skip } from '@/components/Icons/Skip';
import useStore, { StoreState } from '@/store/useStore';

import { GameResultsContainer, GameResultsList, GameResultsListItem } from './GameResults.styles';

type GameResultsProps = React.ComponentPropsWithoutRef<'article'>;

const likesSelector = (state: StoreState) => state.likes;
const dislikesSelector = (state: StoreState) => state.dislikes;
const skipsSelector = (state: StoreState) => state.skips;
const totalSelector = (state: StoreState) => state.total;
const resetSelector = (state: StoreState) => state.reset;

export const GameResults: React.FC<GameResultsProps> = () => {
  const likes = useStore(likesSelector);
  const dislikes = useStore(dislikesSelector);
  const skips = useStore(skipsSelector);
  const total = useStore(totalSelector);
  const reset = useStore(resetSelector);

  return (
    <Card>
      <GameResultsContainer>
        <Text as="h2" variant="lg" weight="bold">
          Thank you for playing!
        </Text>
        <GameResultsList>
          <GameResultsListItem>
            <Like />
            <Text variant="md">{likes}</Text>
          </GameResultsListItem>
          <GameResultsListItem>
            <Dislike />
            <Text variant="md">{dislikes}</Text>
          </GameResultsListItem>
          <GameResultsListItem>
            <Skip />
            <Text variant="md">{skips}</Text>
          </GameResultsListItem>
          <GameResultsListItem>
            <Text variant="md">Total: {total}</Text>
          </GameResultsListItem>
        </GameResultsList>
      </GameResultsContainer>
      <CardContent>
        <Button onClick={reset}>Play Again</Button>
      </CardContent>
    </Card>
  );
};
