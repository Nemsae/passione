import styled from 'styled-components';

import H1 from 'components/H1';

const H1Hero = styled(H1).attrs({ className: 'h1 h1--hero' })`
  margin: 0;

  color: #ffffff;

  font-size: 2em;
  font-family: 'Baskervville', serif;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 5px;

  color: #000;
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

  &:before {
    position: absolute;
    content: attr(data-text);
    color: #fff;
    background: #000;
    clip-path: circle(20px at var(--x, -40px) var(--y, -40px));
  }

  transition: all 800ms ease-in-out;
`;

export default H1Hero;
