import React from 'react';
import search from '../style/svg/search.svg';

function Navbar() {
  return (
    <div className="flex rounded-lg border gap-4 p-2 w-[400px] my-10 phone:w-full">
      <img src={search} alt="search" />
      <input placeholder="Cari Pokemon" className='w-full p-2'/>
    </div>
  );
}

export default Navbar;
