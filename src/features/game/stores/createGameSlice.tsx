import { SetState } from 'zustand';

import { StoreState } from '@/store/useStore';

import { GameListKey } from '../types/Game';

export const createGameSlice = (set: SetState<StoreState>) => ({
  likes: 0,
  dislikes: 0,
  skips: 0,
  total: 0,
  addToListByKey: (gameListKey: GameListKey) => {
    set((state) => ({ ...state, [gameListKey]: state[gameListKey] + 1, total: state.total + 1 }));
  },
});
