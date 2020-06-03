import React from 'react';
import PropTypes from 'prop-types';
import { RatingDot, RatingFiller, HalfRating, FullRating} from '../css/RatingStyles';
import { SRSpan } from '../css/layout'

const Rating = ({ score, reviewcount }) => {

  let rating = [0, 0, 0, 0, 0];
  const fullDots = Math.floor(score);
  for (let i = 0; i < fullDots; i += 1) {
    rating[i] = '12px';
  }
  const halfDots = score % 1;
  if (halfDots >= 0.25) {
    if (halfDots <= 0.75) {
      rating[fullDots] = '6px';
    }
  }

  const emptyDots = 5 - fullDots - halfDots;

  return (
    <span className="rating">
      {rating.map((circle, index) => {
        return (
          <RatingDot key={index}>
            <RatingFiller ratingstyle={circle}/>
          </RatingDot>
        );
      })}
      <SRSpan>Rating of {score} out of 5</SRSpan>
      {reviewcount} reviews
    </span>
  );
};

export default Rating;


Rating.defaultProps = {
  score: 0.0,
};

Rating.propTypes = {
  score: PropTypes.number,
  reviewcount: PropTypes.number,
};
