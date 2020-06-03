import React, { Component } from 'react';
import GlobalStyles from '../css/globalstyles';
import AttractionList from './AttractionList';
import { Link, animateScroll as scroll } from 'react-scroll';
import GoogleMap from './GoogleMap';
import tour from '../../dummydata';
import { Backdrop, Panel, List, LayoutRow, LayoutColumn, DisplayHeading } from '../css/layout';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tour: {
        Attractions: [],
      },
    };
    this.toggle = this.toggle.bind(this);
    this.loadTour = this.loadTour.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  componentDidMount() {
    this.loadTour();
  }

  loadTour() {
    axios.get('tour')
      .then((response) => {
        this.setState({ tour: response.data });
        this.setState({ isLoaded: true });
      });
  }

  collapseAll() {
    const { tour: { Attractions: collapsedAttractions } } = this.state;
    for (let i = 0; i < collapsedAttractions.length; i += 1) {
      collapsedAttractions[i].display = false;
    }
    this.setState({ tour: { Attractions: collapsedAttractions } });
  }

  toggle(i) {
    const { tour: { Attractions: toggledAttraction } } = this.state;
    if (toggledAttraction[i].display !== undefined) {
      toggledAttraction[i].display = !toggledAttraction[i].display;
    } else {
      toggledAttraction[i].display = true;
    }
    this.setState(toggledAttraction);
  }

  render() {
    const { tour: { Attractions: attractions } } = this.state;
    const { tour: about } = this.state;
    const { isLoaded: showMap } = this.state;
    return (
      <Backdrop>

        <h1>Overview</h1>
        <p>{about.overview}</p>
        <h2>Itinerary</h2>

        <LayoutRow>
          {/* Due to being implemented without a library,
              the GoogleMaps API does not re-render when there are
              property changes passed down to it, and so this will
              cause the map not to actually render pins if it is
              loaded outright.  So, we check if the pin data is loaded
              before actually rendering the component.
          */}
          { showMap
            ? (
              <GoogleMap
                collapseAll={this.collapseAll}
                handlePin={this.toggle}
                attractions={attractions}
              />
            )
            : null }

          <LayoutColumn>
            <Panel>
              <DisplayHeading>You&rsquo;ll have 3 starting options</DisplayHeading>
              <Link to="#">See Important Information for details</Link>
            </Panel>

            <AttractionList attractions={attractions} handleToggle={this.toggle} />

            <Panel>
              <DisplayHeading>You&rsquo;ll end at</DisplayHeading>
              <Link to="#">See Important Information for details</Link>
            </Panel>
          </LayoutColumn>
        </LayoutRow>
        <GlobalStyles />
      </Backdrop>
    );
  }
}

export default App;

App.defaultProps = {
};

App.propTypes = {
};
