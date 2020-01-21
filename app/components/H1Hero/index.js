import styled from 'styled-components';

import H1 from 'components/H1';

import cssVars from '../../cssVariables';

const H1Hero = styled(H1).attrs({ className: 'h1 h1--hero' })`
  margin: 0;

  font-size: 2em;
  font-family: ${cssVars.FONT_FAMILY_BODY};
  
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 6px;

  color: #000;
  color: ${cssVars.CLR_WHITE};
  display: inline-block;
  text-align: center;
  position: relative;

    /* display:inline-block;
  margin:50px;
  background: radial-gradient(circle at var(--x,-40px) var(--y,-40px), #fff 20px,black 21px);
  background-clip: text;
  -webkit-background-clip: text;
  color:transparent;
  -webkit-text-fill-color: transparent; */

  /* &:before {
    position: absolute;
    content: attr(data-text);
    color: ${cssVars.CLR_WHITE};
    background: #000;
    clip-path: circle(20px at var(--x, -40px) var(--y, -40px));
  } */

  /* sup.exponent {
    font-size: 0.54em;

    transition: all 800ms ease-in-out;
  }

  &:hover {
    sup.exponent {
      vertical-align: initial;
      font-size: 1em;
    }
  } */

  transition: all 800ms ease-in-out;
`;

export default H1Hero;
