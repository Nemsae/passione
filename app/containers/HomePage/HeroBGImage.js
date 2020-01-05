import styled from 'styled-components';

import greta1 from 'images/greta1.jpg';

const HeroBGImage = styled.div.attrs({
  className: 'hero-bg-image',
})`
  position: absolute;

  /* The image used */
  background-image: url(${greta1});

  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* width: 100%;
  max-width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  transition: all 800ms ease-in-out;

  opacity: 0;

  &.active {
    opacity: 1;
  }

  /* @media only screen and (max-width: 800px) {
  } */
`;

export default HeroBGImage;
