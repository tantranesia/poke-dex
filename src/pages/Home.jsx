import React, { useState } from 'react';
import { createContext } from 'react';

// import component
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

export const Context = createContext(null);

function Home() {
  const [search, setSearch] = useState('');
  return (
    <Context.Provider
      value={{
        search,
        updateSearch: (search) => setSearch(search),
      }}
    >
      <div className="flex flex-col my-12 items-center justify-center">
        <div>
          <h1 className="font-bold text-2xl text-left phone:text-1xl">
            Stock Pokemon
          </h1>
          <Navbar />
          <Cards />
        </div>
      </div>
    </Context.Provider>
  );
}

export default Home;
