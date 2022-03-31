import { Card } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

import { GameActions } from '../components/GameActions/GameActions';

export const Game = () => {
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
