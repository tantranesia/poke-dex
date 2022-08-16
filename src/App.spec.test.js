import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const greetme = "Hello!";
describe("Our first test!", () => {
   it("Should say hello!", () => {
      expect(greetme).toBe("Hello!");
   });
});
