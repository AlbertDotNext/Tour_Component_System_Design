import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../public/components/rating';

describe('Rating Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Rating score={5} reviewcount={50} />);
  });

  test('It should render the Rating component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should contain a textual representation of the review count', () => {
    wrapper.contains('50 reviews');
  });

  test('It contain a textual representation fo the review score for screen readers', () => {
    wrapper.contains('Rating of 5 out of 5');
  });

});
