import styled from 'styled-components';

const RatingDot = styled.span`
  box-sizing: border-box;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1.25px solid #00a680;
  overflow: hidden;
  margin: 0px 1px;
`;
// opacity: ${props => (props.displayme ? "1" : "0")};
const RatingFiller = styled.span`
  width: ${ props => props.ratingstyle };
  height: 12px;
  display: block;
  background-color: #00a680;
`;

export {
  RatingDot,
  RatingFiller,
};
