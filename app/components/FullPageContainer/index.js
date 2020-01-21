import styled from 'styled-components';

// import greta1 from 'images/greta1.jpg';

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

  &.white {
    background-color: ${cssVars.CLR_WHITE};
  }
`;

export default FullPageContainer;
