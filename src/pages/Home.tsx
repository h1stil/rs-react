import React from 'react';

import CardList from '../components/CardList';
import Search from '../components/Search';

function Home() {
  document.title = 'RSS React';
  return (
    <>
      <Search />
      <CardList />
    </>
  );
}

export default Home;
