import styled from 'styled-components';

import ButtonSocial from 'components/ButtonSocial';

import cssVars from '../../cssVariables';

const Wrapper = styled.footer`
  /* position: fixed; */
  position: absolute;

  bottom: 0;

  display: flex;

  color: ${cssVars.CLR_WHITE};

  font-family: ${cssVars.FONT_FAMILY_BODY};

  ${ButtonSocial} + ${ButtonSocial} {
    margin-left: 1em;
  }
  
`;

export default Wrapper;
