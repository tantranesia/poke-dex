import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Context } from './pages/Home';
// import component
import Home from './pages/Home';
import Cards from './components/Cards';

it('shows correct header', () => {
  const subject = shallow(<Home />);
  expect(subject.find('h1').text()).toBe('Stock Pokemon');
});

it('check card component render', () => {
  const subject = shallow(
    <Context.Provider value={null}>
      <Cards />
    </Context.Provider>
  ).dive()

  expect(subject.find('p').text()).toBe('Name');
});
