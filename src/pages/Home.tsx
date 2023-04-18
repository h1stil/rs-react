import React from 'react';

import CardList from '../components/CardList';
import Search from '../components/Search';

function Home() {
  document.title = 'RSS React';
  return (
    <div data-testid="home-page">
      <Search />
      <CardList />
    </div>
  );
}

export default Home;
