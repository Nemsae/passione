import styled from 'styled-components';

import H1 from 'components/H1';
import cssVars from '../../cssVariables';

import HeroMessageContainer from './HeroMessageContainer';

const HeroContainer = styled.article`
  position: relative;

  width: 100vw;
  height: 100vh;

  /* background: ${cssVars.CLR_BLACK}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.white {
    background: ${cssVars.CLR_WHITE};
    color: #000;

    /* ${HeroMessageContainer} {
      border-color: #000;
    }

    ${H1} {
      color: #000;
    } */
  }
`;

export default HeroContainer;
