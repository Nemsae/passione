import styled from 'styled-components';

const HeroMessageContainer = styled.section.attrs({
  className: 'hero-message__container',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default HeroMessageContainer;
