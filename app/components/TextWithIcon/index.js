import styled from 'styled-components';

import cssVars from '../../cssVariables';

const TextWithIcon = styled.i.attrs({
  className: 'text-with-icon',
})`
  position: relative;
  font-style: normal;

  svg {
    position: absolute;

    bottom: -1.1em;
    left: 50%;
    transform: translateX(-47%);
    width: 130%;
    height: 90%;

    /* &.icon-underline {
      transform: translateX(-47%);
      width: 130%;
      height: 90%;
    } */
  }

  &.bottom-sm {
    svg {
      bottom: -0.8em;
    }
  }
`;

export default TextWithIcon;
