import styled from 'styled-components';
import { rgba } from 'polished';

import cssVars from '../../cssVariables';

const HeroContainerPassion = styled.section.attrs({
  className: 'hero-container hero-container--passion',
})`
  position: relative;

  width: 100%;

  &.white {
    color: ${cssVars.CLR_WHITE};
  }

  h1,
  h2,
  p {
    margin: 0;

    font-size: 2.4rem;
    line-height: 1.55;
    font-family: ${cssVars.FONT_FAMILY_BODY};
    color: #4A4A4A;
  }
  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    color: ${rgba('#70757A', 0.8)};

    margin-top: 0.5em;
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

  #farewell-text {
    /* text-align: left; */
    font-size: 1.8rem;
    line-height: 1.4;
  }

  .album-font {
    /* padding: 8px 24px; */
    padding: 0.2em 0.6em;
    border: 3px solid ${cssVars.CLR_WHITE};
    border-left: 0;
    border-right: 0;

    font-size: 1.5em;
    line-height: 2.2;

    text-transform: uppercase;
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

  &.white {
    h1,
    p {
      color: ${cssVars.CLR_WHITE};
    }
    h2 {
      color: ${rgba('#70757A', 0.98)};
    }
  }

  @media screen and (min-width: 53em) {
    position: relative;
    
    width: 90%;

    max-width: 1200px;
    margin: 0 auto;
    
    h1 {
      font-size: 9vh;
      letter-spacing: 4px;
    }
    #farewell-text {
      font-size: 7vh;
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
