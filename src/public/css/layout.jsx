import styled from 'styled-components';

const defaultTypeface = "Roboto, Arial, 'Helvetica Neue', Helvetica, sans-serif";

const Backdrop = styled.section`
  font-family: var(--bodytypeface, ${defaultTypeface} );
  -webkit-font-smoothing:antialiased;
  max-width: 813px;
  background-color: #ffffff;
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 2px;
  margin: 12px;
  font-size: 12px;

  button {
  display: block;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;

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
  }
`;

const List = styled.ul`
  border-left: 4px dotted rgb(24, 24, 24);
  padding: 8px 8px 8px 0px;
  margin-left: 8px;
`;

const Flex = styled.div`
  display: flex;
`;

const LayoutRow = styled(Flex)`
  flex-direction: row;
`;

const Panel = styled.div`
  margin: 4px;
  padding: 8px;
  border-bottom: 1px solid rgb(224, 224, 224);
  &:last-of-type {
    border-bottom: none;
  }
`;

const LayoutColumn = styled(Flex)`
  flex-direction: column;
`;

// A "SR*" class for screen reader use/accessibility. 
const SRSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

const DisplayHeading = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 4px;
`;

export {
  Backdrop,
  Panel,
  List,
  LayoutRow,
  LayoutColumn,
  SRSpan,
  DisplayHeading
}