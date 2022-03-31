import { Global, ThemeProvider } from '@emotion/react';

import MainStyles from '@/styles';

import { MainLayout } from './components/Layout';
import { Game } from './features/game/routes/Game';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={MainStyles} />
      <MainLayout>
        <Game />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
