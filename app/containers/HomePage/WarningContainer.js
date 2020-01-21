import styled from 'styled-components';

import HeroButton from './HeroButton';

import cssVars from '../../cssVariables';

const WarningContainer = styled.section.attrs({
  className: 'warning__container',
})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  width: 100%;
  z-index: calc(${cssVars.HEADER_Z_INDEX} + 999);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #000;

  p {
    margin: 0;

    color: ${cssVars.CLR_WHITE};
    font-family: Arial;
    font-weight: 700;
    font-size: 34px;
    line-height: 1.11;
  }

  ${HeroButton} {
    position: absolute;
    bottom: 4rem;
  }

  opacity: 1;

  transition: all 800ms ease-in-out;

  &.inactive {
    opacity: 0;
  }

  @media screen and (min-width: 53em) {
    
  }
`;

export default WarningContainer;
