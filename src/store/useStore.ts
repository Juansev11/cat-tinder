import create from 'zustand';

import { createConfigSlice } from '@/features/config/stores/createConfigSlice';
import { ConfigSlice } from '@/features/config/types/Config';

export type MyState = ConfigSlice;

const useStore = create<MyState>((set) => ({
  ...createConfigSlice(set),
}));

export default useStore;
