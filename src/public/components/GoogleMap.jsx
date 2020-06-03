import React, { Component, createRef } from 'react';
import apikey from '../../../config.js';
import { MyMapContainer } from '../css/MapStyles';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = createRef();
    this.embedGoogleMaps = this.embedGoogleMaps.bind(this);
  }

  embedGoogleMaps() {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`;
    window.document.body.appendChild(googleScript);
    googleScript.addEventListener('load', ()=> {
      this.googleMap = this.createGoogleMap();
    });
  }

  componentDidMount() {
    this.embedGoogleMaps(); 
  }

  createGoogleMap() {
    const handlePin = this.props.handlePin.bind(this);
    const collapseAll = this.props.collapseAll.bind(this);
    const attractions = this.props.attractions;

    const iconBase = {
      scaledSize: new google.maps.Size(35, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 40),
    };
    const defaultIcon = { ...iconBase, url: 'https://itinerarybucket.s3-us-west-2.amazonaws.com/itinerary_stop.png'};
    const activeIcon = {...iconBase, url: 'https://itinerarybucket.s3-us-west-2.amazonaws.com/itinerary_stop_active.png'};

    const labelBase = {
      fontWeight: 'bold',
      lineHeight: '12px',
      display: 'flex',
    };
    const labelDefault = { ...labelBase, color: 'rgb(224, 224, 244)' };
    const labelHover = { ...labelBase, color: 'rgb(26, 26, 26)' };

    const map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: { lat: 37.7749, lng: -122.4194 }, // san francisco
      disableDefaultUI: true,
    });

    for (let i = 0; i < attractions.length; i += 1) {
      const myLabel = { ...labelDefault, text: (i + 1).toString() };
      const myLabelHover = { ...labelHover, text: (i + 1).toString() };

      const pin = new window.google.maps.Marker({
        position: {
          lat: attractions[i].latitude,
          lng: attractions[i].longitude,
          stopindex: i,
        },
        icon: defaultIcon,
        map,
        label: myLabel,
      });

      const infowindow = new google.maps.InfoWindow({
        content: attractions[i].name,
      });

      pin.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(this.getPosition());
        let idx = this.label.text - 1;
        collapseAll();
        handlePin(idx);
      });

      pin.addListener('mouseover', function() {
        this.setIcon(activeIcon);
        this.setLabel(myLabelHover);
        infowindow.open(map, this);
      });

      pin.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
        this.setLabel(myLabel);
        infowindow.close(map, this);
      });
    }
  }

  render() {
    const mapStyle = {
      width: '350px',
      height: '350px',
      marginRight: '8px',
      top: '12px',
      zIndex: 1,
      position: 'sticky !important',
    };

    return (
      <div>
      <MyMapContainer>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: '100%', height: '100%' }}
        />
      </MyMapContainer>
      </div>
    );
  }
}

export default GoogleMap;
