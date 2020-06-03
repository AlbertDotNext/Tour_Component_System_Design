import React from 'react';
import { mount } from 'enzyme';
import Attraction from '../public/components/Attraction';
import dummydata from '../dummydata.js';


describe('POI Entry component', () => {
  const data = dummydata.Attractions[0];
  const clickHandler = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Attraction
        data={data}
        expand={true}
        stopIndex={1}
        onClick={clickHandler} 
      />,
    );
  });

  test('It should render the POIEntry component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should contain the title of the POI', () => {
    const poititle = data.name;
    wrapper.contains(poititle);
  });

  xtest('It should communicate how long the tourist will be at that location', () => {
  });

  xtest('It should communicate admission information', () => {

  });

  test('It should depict the POI\'s review-based rating', () => {
    const rating = wrapper.find('Rating');
    expect(rating).toExist();
  });

  test('It should have a functioning click handler to handle toggles', () => {
    expect(clickHandler).not.toHaveBeenCalled();
    wrapper.find('button').simulate('click');
    expect(clickHandler.mock.calls.length).toEqual(1);
  });

  test('It should have an image of the POI', () => {
    const image = wrapper.find('img');
    expect(image).toBeTruthy();
    expect(image.prop('src')).toBeTruthy();
  });

  test('It should have a link to a page about the attraction itself', () => {
    const pagelink = wrapper.find('a');
    const linktext = data.name;
    pagelink.contains({linktext});
  });
});

