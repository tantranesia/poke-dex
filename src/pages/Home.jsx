import React from 'react';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <div className="flex flex-col my-12 items-center justify-center">
      <div>
        <h1 className="font-bold text-2xl text-left phone:text-1xl">Stock Pokemon</h1>
        <Navbar />
        <Cards />
      </div>
    </div>
  );
}

export default Home;
