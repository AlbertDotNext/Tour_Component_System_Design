import styled from 'styled-components';

const defaultTypeface = "Muli, Arial, 'Helvetica Neue', Helvetica, sans-serif";

const Block = styled.section`
  font-family: var(--bodytypeface, ${defaultTypeface} );
  -webkit-font-smoothing:antialiased;
  max-width: 813px;
  background-color: #ffffff;
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 2px;
  margin: 12px;
`;

const Flex = styled.div`
  display: flex;
`;

const LayoutRow = styled(Flex)`
  flex-direction: row;
`;

const LayoutColumn = styled(Flex)`
  flex-direction: column;
`;

export {
  Block,
  LayoutRow,
  LayoutColumn,
}