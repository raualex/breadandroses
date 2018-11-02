import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BrowserRouter><App /></BrowserRouter>)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})
