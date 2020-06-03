import React from 'react';
import { shallow } from 'enzyme';
import AttractionList from '../public/components/AttractionList';
import dummydata from '../dummydata.js';

describe('AttractionList component', () => {
  const data = dummydata.Attractions;
  const handleToggle = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AttractionList
        attractions={data}
        handleToggle={handleToggle}
      />,
    );
  });

  test('It should render the AttractionList component to the screen', () => {
    expect(wrapper).toExist();
  });
});
