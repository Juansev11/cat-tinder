import { ThemeProvider } from '@emotion/react';
import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { theme } from '@/styles/theme';

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)],
    { timeout: 4000 }
  );

// eslint-disable-next-line import/export
export const render = async (ui: any, renderOptions: Record<string, any> = {}) => {
  const returnValue = {
    ...rtlRender(ui, {
      wrapper: ({ children }) => {
        return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
      },
      ...renderOptions,
    }),
  };

  await waitForLoadingToFinish();

  return returnValue;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export { userEvent, rtlRender };
