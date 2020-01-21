import styled from 'styled-components';

import cssVars from '../../cssVariables';

const Button = styled.button`
  display: inline-block;

  border: none;
  margin: 0;
  padding: 0;

  background-color: transparent;

  font-size: 16px;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: ${cssVars.CLR_WHITE};
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none; */

  /* &:hover,
  &:focus {
    background: #0053ba;
  }

  &:focus {
    outline: 1px solid ${cssVars.CLR_WHITE};
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  } */
`;

export default Button;
