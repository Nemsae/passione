import styled from 'styled-components';

import Button from 'components/Button';

import cssVars from '../../cssVariables';

const DURATION_OPACITY = 200;
const DURATION_TRANSFORM = 200;

const WarningClose = styled(Button).attrs({
  className: 'warning__close',
})`
  position: absolute;
  top: 1em;
  right: 1em;

  width: 32px;
  height: 32px;

  &:before,
  &:after {
    content: ' ';

    position: absolute;
    /* left: 15px; */
    left: 50%;

    height: 33px;
    width: 2px;
    background-color: ${cssVars.CLR_WHITE};
  }
  &:before {
    /* transform: rotate(45deg); */
    transform: rotate(45deg) translateX(-50%);
  }
  &:after {
    /* transform: rotate(-45deg); */
    transform: rotate(-45deg) translateX(-50%);
  }

  @media screen and (min-width: 53em) {
    top: 2em;
    right: calc(2em + 16px);
  }

  transition: opacity ${DURATION_OPACITY}ms, transform ${DURATION_TRANSFORM}ms ${DURATION_OPACITY}ms;
`;

export default WarningClose;
