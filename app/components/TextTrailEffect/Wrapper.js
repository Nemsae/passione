import styled from 'styled-components';

import CoDrops from './CoDrops';

const Wrapper = styled(CoDrops).attrs({
  className: 'text-trail__wrapper',
})`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
`;

export default Wrapper;
