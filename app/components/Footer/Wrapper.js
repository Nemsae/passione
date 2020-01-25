import styled from 'styled-components';

import ButtonSocial from 'components/ButtonSocial';

import cssVars from '../../cssVariables';

const Wrapper = styled.footer`
  /* position: fixed; */
  position: absolute;

  bottom: 1.5em;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${cssVars.CLR_WHITE};

  font-family: ${cssVars.FONT_FAMILY_BODY};

  /* ${ButtonSocial} + ${ButtonSocial} {
    margin-left: 1.5em;
  } */
  
  .primary {
    margin: 0 1.2em;
  }
`;

export default Wrapper;
