import styled from 'styled-components';

import cssVars from '../../cssVariables';

const ButtonSocial = styled.a.attrs({
  className: 'button-link button-link--social',
})`
  display: inline-block;

  border: none;
  margin: 0;
  padding: 0;

  background-color: transparent;

  font-size: 2rem;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  color: ${cssVars.CLR_WHITE};

  &.primary {
    /* font-size: 3rem; */
    font-size: 2.4rem;
  }

  @media screen and (min-width: 53em) {

  }
`;

export default ButtonSocial;
