import { SetState } from 'zustand';

import { StoreState } from '@/store/useStore';

import { ConfigScreens } from '../types/Config';

export const createConfigSlice = (set: SetState<StoreState>) => ({
  currentScreen: ConfigScreens.START,
  setCurrentScreen: (currentScreen: ConfigScreens) => {
    set((state) => ({ ...state, currentScreen }));
  },
  selectedSeconds: 60,
  setSelectedSeconds: (selectedSeconds: string) => {
    set((state) => ({ ...state, selectedSeconds: Number(selectedSeconds) }));
  },
});
