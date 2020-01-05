import styled from 'styled-components';

import cssVars from '../../cssVariables';

export default styled.nav`
  position: fixed;
  top: 0;
  z-index: ${cssVars.HEADER_Z_INDEX};

  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
