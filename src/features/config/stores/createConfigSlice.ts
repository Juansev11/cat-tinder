import { SetState } from 'zustand';

import { MyState } from '@/store/useStore';

import { ConfigScreens } from '../types/Config';

export const createConfigSlice = (set: SetState<MyState>) => ({
  currentScreen: ConfigScreens.START,
  setCurrentScreen: (currentScreen: ConfigScreens) => {
    set((state) => ({ ...state, currentScreen }));
  },
  selectedSeconds: '',
  setSelectedSeconds: (selectedSeconds: string) => {
    set((state) => ({ ...state, selectedSeconds }));
  },
});
