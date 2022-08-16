import React, { useContext, useEffect } from 'react';
import { Context } from '../pages/Home';

// import svg
import logo from '../style/svg/search.svg';

function Navbar() {
  const { search, updateSearch } = useContext(Context);
  // handle search
  const handleSearch = (e) => {
    updateSearch(e.target.value);
  };

  useEffect(() => {}, [search]);
  return (
    <div className="flex rounded-lg border gap-4 p-2 w-[400px] my-10 phone:w-full">
      <img src={logo} alt="search" />
      <input
        placeholder="Cari Pokemon"
        className="w-full p-2"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Navbar;
