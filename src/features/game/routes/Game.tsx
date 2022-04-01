import { ContentLayout } from '@/components/Layout';
import { ConfigurationMenu } from '@/features/config/components/ConfigurationMenu/ConfigurationMenu';
import useFetch from '@/hooks/useFetch';

type GameProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

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
      <ConfigurationMenu />
    </ContentLayout>
  );
};
