import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
import mock from '../utils/mock';

mock();

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  await user.click(screen.getByText(/about/i));
  expect(screen.getByText('about us')).toBeInTheDocument();

  await user.click(screen.getByText(/form/i));
  expect(screen.getByText('Create card')).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
});
