import { Card } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import useFetch from '@/hooks/useFetch';

import { GameActions } from '../components/GameActions/GameActions';
import { GameCountdown } from '../components/GameCountdown/GameCountdown';

type GameProps = React.ComponentPropsWithRef<typeof ContentLayout>;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Game: React.FC<GameProps> = () => {
  useFetch<Post[]>('https://api.thecatapi.com/v1/images/search?limit=5&category_ids=[1,2,3,4,5]');

  return (
    <ContentLayout>
      <h1>Tinder for Cats!</h1>
      <Card
        image="https://i.pinimg.com/736x/2f/86/c9/2f86c98e8f3d61b53931d8ad03e06374.jpg"
        title="Wontong"
        description="I am a very cheerful kitty. Looking for my meow mate"
      />
      <GameActions />
    </ContentLayout>
  );
};
