import { render, screen, userEvent } from '@/test/test-utils';

import { Game } from './Game';

const renderGame = async () => {
  const utils = await render(<Game />);
  return {
    ...utils,
  };
};

describe('Game', () => {
  it('renders the initial screen', async () => {
    await renderGame();

    const gameTitle = await screen.findByRole('heading', { name: /tinder for cats!/i });
    expect(gameTitle).toBeInTheDocument();

    const startGameButton = await screen.findByRole('button', { name: /start/i });
    expect(startGameButton).toBeInTheDocument();

    const secondsInput = screen.getByRole('spinbutton', { name: /seconds/i });
    expect(secondsInput).toBeInTheDocument();

    const initialImage = await screen.findByRole('img');
    expect(initialImage).toBeInTheDocument();
  });
  it('can configure the seconds to countdown ', async () => {
    await renderGame();

    const secondsInput = screen.getByRole('spinbutton', { name: /seconds/i });
    userEvent.type(secondsInput, '100');
    expect(secondsInput).toHaveValue(60100);
  });
  it('can click on start game and proceed successfully to next screen', async () => {
    await renderGame();

    const startGameButton = await screen.findByRole('button', { name: /start/i });

    userEvent.click(startGameButton);
    expect(startGameButton).not.toBeInTheDocument();
  });
});
