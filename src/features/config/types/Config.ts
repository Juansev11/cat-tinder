export type ConfigSlice = {
  selectedSeconds: number;
  setSelectedSeconds: (seconds: string) => void;
  currentScreen: ConfigScreens;
  setCurrentScreen: (screen: ConfigScreens) => void;
};

export enum ConfigScreens {
  START = 'START',
  GAME = 'GAME',
  STATS = 'STATS',
}
