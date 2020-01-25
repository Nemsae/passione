import styled from 'styled-components';

import cssVars from '../../cssVariables';

const SpazzVideo = styled.span`
  position: absolute;
  z-index: 0;
  opacity: 0;

  video {
    max-width: 400px;
  }

  &#video-1,
  &#video-2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
      max-width: 80%;
    }
  }

  &#video-1 {
    @media screen and (min-width: 53em) {
      top: 13%;
      left: 13%;
    }
  }

  &#video-2 {
    max-height: 400px;
    @media screen and (min-width: 53em) {
      bottom: 13%;
      right: 13%;
    }
  }

  &.inactive {
    opacity: 0;
    transition: all 400ms ease-in;
  }
  &.active {
    opacity: 1;
    transition: all 400ms ease-out;
  }
`;

export default SpazzVideo;
