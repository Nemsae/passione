import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  max-width: 55px;
  margin: 0 auto;
  display: block;

  filter: invert(1);

  @media screen and (min-width: 53em) {
    max-width: 80px;
  }
`;

export default Img;
