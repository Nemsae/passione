import styled from 'styled-components';

import H1 from 'components/H1';

import cssVars from '../../cssVariables';

const H1Hero = styled(H1).attrs({ className: 'h1 h1--hero' })`
  margin: 0;

  font-size: 4rem;
  font-family: ${cssVars.FONT_FAMILY_BODY};

  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 6px;

  color: #000;
  color: ${cssVars.CLR_WHITE};
  display: inline-block;
  text-align: center;
  position: relative;

  transition: all 800ms ease-in-out;

  .mobile-break {

  }

  @media screen and (min-width: 53em) {
    font-size: 10vh;

    .mobile-break {
      display: none;
    }
  }
`;

export default H1Hero;
