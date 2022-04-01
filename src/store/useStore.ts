import create from 'zustand';

import { createConfigSlice } from '@/features/config/stores/createConfigSlice';
import { ConfigSlice } from '@/features/config/types/Config';
import { createGameSlice } from '@/features/game/stores/createGameSlice';
import { GameSlice } from '@/features/game/types/Game';

export type StoreState = ConfigSlice & GameSlice;

const useStore = create<StoreState>((set, get) => ({
  ...createConfigSlice(set),
  ...createGameSlice(set, get),
}));

export default useStore;
