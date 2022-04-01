import create from 'zustand';

import { createConfigSlice } from '@/features/config/stores/createConfigSlice';
import { ConfigSlice } from '@/features/config/types/Config';

export type StoreState = ConfigSlice;

const useStore = create<StoreState>((set) => ({
  ...createConfigSlice(set),
}));

export default useStore;
