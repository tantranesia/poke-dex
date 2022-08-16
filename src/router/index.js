import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Confirmation from '../pages/Confirmation';
import Details from '../pages/Details';
import Home from '../pages/Home';

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={1} exact={true} path={'/'} element={<Home />} />
          <Route key={2} exact={true} path={'/:name'} element={<Details />} />
          <Route
            key={3}
            exact={true}
            path={'/:name/confirmation'}
            element={<Confirmation />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
