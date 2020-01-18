import styled from 'styled-components';
import { rgba } from 'polished';

//  components
import H1Hero from 'components/H1Hero';

import cssVars from '../../cssVariables';

const HeroButton = styled.button`
  display: flex;

  margin: 0;
  border: 3px solid #000;
  padding: 0.5em 1.5em;
  background: transparent;

  cursor: pointer;

  /* transition: box-shadow 200ms, transform 200ms; */
  transition: all 800ms ease-in-out;

  &:hover {
    /* box-shadow: 0px 6px 66px 0px ${rgba('#7D5BA6', 0.3)}; */
    /* box-shadow: 0px 6px 26px 0px ${rgba(
    '#000',
    0.1,
    )}, inset 0px 8px 16px 0px ${rgba('#000', 0.1)}; */

    transform: scale(1.08);
  }

   &.active {
    border-color: ${cssVars.CLR_PRIMARY};
    color: ${cssVars.CLR_PRIMARY};
    /* background-color: ${rgba(cssVars.CLR_THE_SPEED_OF_LIGHT, 0.8)}; */
    background: linear-gradient(
      to bottom,
      ${rgba(cssVars.CLR_WHITE, 0.6)} 0%,
      ${rgba(cssVars.CLR_WHITE, 0.75)} 10%,
      ${rgba(cssVars.CLR_THE_SPEED_OF_LIGHT, 0.75)} 40%,
      ${rgba(cssVars.CLR_THE_SPEED_OF_LIGHT, 0.75)} 60%,
      ${rgba(cssVars.CLR_WHITE, 0.75)} 90%,
      ${rgba(cssVars.CLR_WHITE, 0.6)} 100%
    );

    ${H1Hero} {
      color: ${cssVars.CLR_PRIMARY};
    }
  }
`;

export default HeroButton;
