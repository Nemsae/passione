import { Link } from 'react-router-dom';
import styled from 'styled-components';

import cssVars from '../../cssVariables';

export default styled(Link)`
  display: inline-flex;
  /* padding: 0.25em 2em; */
  margin: 1em;

  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  text-decoration: none;
  font-family: 'Montserrat Subrayada', serif;
  font-weight: bold;
  font-size: 16px;

  color: ${cssVars.CLR_BLACK};

  &.active {
    color: ${cssVars.CLR_PRIMARY};
  }

  &:visited {
    color: ${cssVars.CLR_BLACK};
  }
  /* &:active {
    background: ${cssVars.CLR_PRIMARY};
    color: ${cssVars.CLR_WHITE};
  } */
`;
