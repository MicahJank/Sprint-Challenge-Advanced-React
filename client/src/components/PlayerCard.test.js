import React from 'react';

import * as rtl from '@testing-library/react';

import PlayerCard from './PlayerCard.js';

afterEach(rtl.cleanup);

it('renders PlayerCard without crashing', () => {
    const wrapper = rtl.render(
      <PlayerCard player={
          {
            name: 'Alex Morgan', 
            country: 'United States', 
            searches: '100', 
            id: 4
        }} />
    );

    console.log(wrapper.debug());
    expect(wrapper).toBeTruthy();
    
    expect(wrapper.getByText(/alex morgan/i));
  });