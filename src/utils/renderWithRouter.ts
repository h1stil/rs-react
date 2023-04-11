import { render } from '@testing-library/react';
import { ReactElement, JSXElementConstructor } from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (
  ui: ReactElement<string | JSXElementConstructor<string>>,
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export default renderWithRouter;
