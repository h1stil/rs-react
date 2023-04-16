import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProvider from '../utils/renderWithProvider';
import App from '../App';

describe('App router', () => {
  it('render home page', () => {
    renderWithProvider(<App />, '/');
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('render about page', () => {
    renderWithProvider(<App />, '/about');
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('render forms page', () => {
    renderWithProvider(<App />, '/form');
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('render 404 page', () => {
    renderWithProvider(<App />, '/pagenotfound1');
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
  });

  it('check router', async () => {
    renderWithProvider(<App />);

    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('about-link')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('about-link'));
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
