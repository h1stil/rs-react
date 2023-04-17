import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../app/store';

const renderWithProvider = (component: ReactNode, initialRoute = '/') => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Provider>
  );
};

export default renderWithProvider;
