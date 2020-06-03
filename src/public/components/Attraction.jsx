import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Rating from './Rating';
import { DropdownButton, ButtonLike, TourItem, TourTitle, TourCounter, TourDetails } from '../css/POIStyles';

const Attraction = ({data, expand, stopIndex, onClick}) => {
  return (
    <TourItem>
      <TourCounter>{stopIndex}</TourCounter>
        <div>
          <Link
            to={`stop-${stopIndex}`}
            spy={true}
            smooth={true}
            offset={-16}
            duration={500}
            id={`stop-${stopIndex}`}
          >
            <TourTitle>{data.name}</TourTitle>
            <div>
              <span className="tour__body">
                Stop: 4 hours
              </span>
              -
              <span className="admission">
                Admission included
              </span>
            </div>
          </Link>

          <TourDetails displayme={expand}>
            <div className="rating">
              <Rating score={data.rating} reviewcount={53} />
            </div>

            <img
              src={data.image_path}
              alt={data.image_alt}
            />
            <p>
              {data.description}
            </p>

            <ButtonLike title={`Read more about ${data.name}`}> 
              More About {data.name}
            </ButtonLike>
          </TourDetails>

          <DropdownButton expand={expand} onClick={() => { onClick(stopIndex - 1); }}>
            {expand === true ? 'See less' : 'See details & photo'}
          </DropdownButton>
        </div>
    </TourItem>
  );
};


export default Attraction;
