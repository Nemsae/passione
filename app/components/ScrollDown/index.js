import styled from 'styled-components';

const ScrollDown = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

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

  .icon--image {
    max-height: 100px;
  }
`;

export default ScrollDown;
