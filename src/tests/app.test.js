import React from 'react';
import { shallow } from 'enzyme';
import App from '../public/components/app';

describe('Itinerary block', () => {
  let wrapper;
  let collapse;
  let loadTour;
  beforeEach(() => {
    wrapper = shallow(<App />);
    loadTour = jest.spyOn(App.prototype, 'loadTour');
    collapse = jest.spyOn(App.prototype, 'collapseAll');
  });

  afterEach(() => {
    loadTour.mockClear();
    collapse.mockClear();
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should load a tour on render', () => {
    expect(loadTour).toHaveBeenCalled();
  });
});
