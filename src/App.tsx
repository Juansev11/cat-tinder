import { Global } from '@emotion/react';

import MainStyles from '@/styles';

function App() {
  return (
    <>
      <Global styles={MainStyles} />
      <h1>Tinder for Cats!</h1>
    </>
  );
}

export default App;
