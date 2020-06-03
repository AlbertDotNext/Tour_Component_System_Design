import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, List } from '../css/layout'; // styled components
import Attraction from './Attraction';

const AttractionList = ({ attractions, handleToggle }) => {
  return (
    <Panel>
      <List>
        {attractions.map((attraction, index) => (
          <div key={`attraction-${index}`}>
            <Attraction
              onClick={handleToggle}
              data={attraction}
              expand={attraction.display ? attraction.display : false}
              stopIndex={index + 1}
            />
          </div>
        ))}
      </List>
    </Panel>
  );
};

export default AttractionList;

AttractionList.defaultProps = {
  attractions: [],
  handleToggle: () => {}
};

AttractionList.propTypes = {
  attractions: PropTypes.array,
  handleToggle: PropTypes.func,
};
