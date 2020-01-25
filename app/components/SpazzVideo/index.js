import styled from 'styled-components';

import cssVars from '../../cssVariables';

const SpazzVideo = styled.span`
  position: absolute;
  z-index: 0;
  opacity: 0;

  video {
    max-width: 400px;
  }

  &#video-1 {
    top: 13%;
    left: 13%;
  }

  &#video-2 {
    max-height: 400px;

    bottom: 13%;
    right: 13%;
  }

  &.active {
    opacity: 1;
  }
`;

export default SpazzVideo;
