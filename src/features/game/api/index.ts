import useFetch from '@/hooks/useFetch';

import { GameCat } from '../types/Game';

export const useGetGameCat = () => {
  return useFetch<GameCat>();
};
