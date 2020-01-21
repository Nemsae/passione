import styled from 'styled-components';

import bgBlack from '../../images/bg_black.jpg';
import cssVars from '../../cssVariables';

export const AppWrapper = styled.div`
  /* margin: 0 auto;
  min-height: 100%; */

  /* min-width: 100%;
  min-height: 100%; */

  background-color: ${cssVars.CLR_APP_BG}; /* Used if the image is unavailable */
  background: url(${bgBlack}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
`;

export default AppWrapper;
