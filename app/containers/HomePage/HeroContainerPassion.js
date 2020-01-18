import styled from 'styled-components';
import { rgba } from 'polished';

const HeroContainerPassion = styled.section.attrs({
  className: 'hero-container hero-container--passion',
})`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h1,
  h2,
  p {
    margin: 0;

    font-size: 2.4rem;
    font-family: 'Libre Caslon Text', serif;
    color: #4A4A4A;
  }
  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    color: ${rgba('#70757A', 0.8)};
  }
  p.definition {
    font-size: 2rem;
  }
  p.label {
    font-size: 1.8rem;
  }

  p.label {
    font-style: italic;
  }

  .definition__container {
    margin-top: 6rem;
  }

  .quote__image {
    z-index: 999;
    color: var(--color-content-link);
    position: relative;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      height: 5px;
      border-width: 1px 0;
      border-style: solid;
      width: 100%;
      left: 0;
      top: calc(100% - 0.25rem);
      border-color: currentColor;

      @media screen and (min-width: 53em) {
        top: calc(100% - 1vh);
      }
    }
  }

  @media screen and (min-width: 53em) {
    h1 {
      font-size: 9vh;
      letter-spacing: 4px;
    }
    h2 {
      font-size: 4.7vh;
    }
    p.definition {
      font-size: 6.7vh;
    }
    p.label {
      font-size: 5vh;
    }
  }
`;

export default HeroContainerPassion;
