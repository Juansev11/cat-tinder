export type GameCat = {
  id: string;
  url: string;
};

export enum GameListKey {
  LIKE = 'likes',
  DISLIKE = 'dislikes',
  SKIP = 'skips',
}

export type GameSlice = {
  likes: number;
  dislikes: number;
  skips: number;
  total: number;
  addToListByKey: (gameListKey: GameListKey) => void;
  reset: () => void;
};
