import styled from 'styled-components';

// import greta1 from 'images/greta1.jpg';

import cssVars from '../../cssVariables';

const FullPageContainer = styled.article`
  position: relative;

  width: 100vw;
  height: 100vh;

  /* background-image: url(${greta1}); */
  &.center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default FullPageContainer;
