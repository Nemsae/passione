import styled from 'styled-components';

const WarningContainer = styled.section.attrs({
  className: 'warning__container',
})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  min-height: 20vh;
  padding: 20px;
  text-align: center;
  width: 100%;
  z-index: 1010;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #000;

  p {
    margin: 0;

    color: #fff;
    font-family: Arial;
    font-weight: 700;
    font-size: 34px;
    line-height: 1.11;
  }

    text-transform: none;
    letter-spacing: 0;
    
  }
`;

export default WarningContainer;
