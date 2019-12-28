import styled from 'styled-components';
import { rgba } from 'polished';

import cssVars from '../../cssVariables';

const HeroButton = styled.button`
  margin: 0;

  border: 3px solid #000;

  padding: 0.5em 1.5em;

  cursor: pointer;

  transition: all 400ms;
  transition: box-shadow 200ms transform 100ms;

  &:hover {
    /* box-shadow: 0px 6px 66px 0px ${rgba('#7D5BA6', 0.3)}; */
    box-shadow: 0px 6px 26px 0px ${rgba(
    '#000',
    0.1,
    )}, inset 0px 8px 16px 0px ${rgba('#000', 0.1)};

    transform: scale(1.05);
  }
`;

export default HeroButton;
