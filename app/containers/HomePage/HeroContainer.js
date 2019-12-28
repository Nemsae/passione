import styled from 'styled-components';

import cssVars from '../../cssVariables';

import H1 from 'components/H1';
import HeroMessageContainer from './HeroMessageContainer';

const HeroContainer = styled.article`
  width: 100vw;
  height: 100vh;

  background: ${cssVars.CLR_BLACK};

  display: flex;
  flex-direction: column;

 &.white {
   background: #fff;
   color: #000;

   ${HeroMessageContainer} {
    border-color: #000;
   }

   ${H1} {
    color: #000;
   }
 }
`;

export default HeroContainer;
