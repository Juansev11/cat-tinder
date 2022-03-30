import { Global } from '@emotion/react';

import MainStyles from '@/styles';

import { Game } from './features/game/routes/Game';

function App() {
  return (
    <>
      <Global styles={MainStyles} />
      <Game />
    </>
  );
}

export default App;
