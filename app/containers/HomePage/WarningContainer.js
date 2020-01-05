import styled from 'styled-components';

import cssVars from '../../cssVariables';

const WarningContainer = styled.section.attrs({
  className: 'warning__container',
})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  min-height: 20vh;
  padding: 20px;
  text-align: center;
  width: 100%;
  z-index: calc(${cssVars.HEADER_Z_INDEX} + 1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #000;

  p {
    margin: 0;

    color: #fff;
    font-family: Arial;
    font-weight: 700;
    font-size: 34px;
    line-height: 1.11;
  }

  opacity: 1;

  transition: all 800ms ease-in-out;

  &.inactive {
    opacity: 0;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 22px;
    }
  }
`;

export default WarningContainer;
