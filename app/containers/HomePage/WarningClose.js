import styled from 'styled-components';

import Button from 'components/Button';

import cssVars from '../../cssVariables';

const WarningClose = styled(Button).attrs({
  className: 'warning__close',
})`
  position: absolute;
  right: 16px;
  top: 0;

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
`;

export default WarningClose;
