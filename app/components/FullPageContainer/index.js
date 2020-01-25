import styled from 'styled-components';

import cssVars from '../../cssVariables';

const FullPageContainer = styled.article`
  position: relative;

  width: 100vw;
  height: 100vh;

  &.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.padding {
    padding: 0 1.5em;
  }

  &.white {
    background-color: ${cssVars.CLR_WHITE};
  }
`;

export default FullPageContainer;
