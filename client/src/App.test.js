import React from 'react';

import * as rtl from '@testing-library/react';

import App from './App';


afterEach(rtl.cleanup);
// test test
it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className='greet'>hello world</span>
  );
  const element = wrapper.queryByText(/hello/i);

  expect(element).toBeTruthy();
});


it('renders App without erroring', () => {
  const wrapper = rtl.render(<App pancakes={'i love pancakes'} />);
  expect(wrapper).toBeTruthy();
})

it('has the text DarkMode somewhere', () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug());
  expect(wrapper.getByText(/darkmode/i)); 
})
