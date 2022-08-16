import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// jest.mock('react-redux', () => {
//     const ActualReactRedux = jest.requireActual('react-redux');
//     return {
//         ...ActualReactRedux,
//         useSelector: jest.fn().mockImplementation(() => {
//             return mockState;
//         }),
//     };
// });

const greetme = "Hello!";
describe("Our first test!", () => {
   it("Should say hello!", () => {
      expect(greetme).toBe("Hello!");
   });
});
