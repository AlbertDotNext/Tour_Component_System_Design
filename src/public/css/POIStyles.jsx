import styled from 'styled-components';

const LinkLikeButton = styled.button`
  text-decoration: underline dotted #d6d6d6;
  border: none;
  font-size: 12px;
  font-weight: 200;
  margin: 4px 0px;
  padding: 0;
  display: inline-block;
  background: none!important;
  text-align: left;

  &::after {
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgb(26, 26, 26);
    display: inline-block;
    line-height: 6px;
    margin: 2px;
    content: "";
    transition: all 0.5s ease-in;
    transform: rotate(${props => (props.expand ? "0" : "180")}deg);
  }
`;

const DropdownButton = styled(LinkLikeButton)`
  &::after {
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgb(26, 26, 26);
    display: inline-block;
    line-height: 6px;
    margin: 2px;
    content: "";
    transition: all 0.5s ease-in;
    transform: rotate(${props => (props.expand ? "0" : "180")}deg);
  }
`;


const ButtonLike = styled.span`
  display: block;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;
  text-align: center;
  color: rgb(26,26,26);
  text-decoration: none;

    &:hover {
      background-color: #d6d6d6;
    }

    &:focus {
      outline: $black solid 1px;
      outline-offset: -4px;
    }

    &:active {
      background-color: #adadad;
    }
`;

const TourItem = styled.li`
  display: flex;
  flex-direction: row!important;
  padding: 6px;
  padding-bottom: 12px;
  flex-direction: column;
  cursor: pointer;
  cursor: hand;
  font-size: 12px;

  img {
    width: 100%;
  }
`;

const TourCounter = styled.span`
  background: #4a4a4a;
  min-width: 20px;
  min-height: 20px
  max-width: 20px;
  max-height: 20px;
  margin: 0 8px 0 -18px;
  box-sizing: border-box;
  border-radius: 100%;
  color: #ffffff;
  font-weight: bold;
  box-shadow: 0 0 0 3px #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

const TourTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const TourDetails = styled.div`
  opacity: ${props => (props.displayme ? "1" : "0")};
  max-height: ${props => (props.displayme ? "1000px" : "0")};
  overflow-y: hidden;
  transform: translate3d(0, 0, 0);  
  -webkit-transform: translate3d(0, 0, 0);
  transition: all 0.5s ease-in;
  overflow-y: hidden;
`;

export {
  TourCounter,
  LinkLikeButton,
  DropdownButton,
  ButtonLike,
  TourDetails,
  TourItem,
  TourTitle,
};
