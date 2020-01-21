import styled from 'styled-components';

import cssVars from '../../cssVariables';

const CoDrops = styled.div.attrs({
  className: 'codrops',
})`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  grid-template-areas: 'main';
  height: calc(100vh - 19rem);
  width: 100%;
  margin: 0 auto;
  position: relative;

  /* background-color: ${cssVars.CLR_BUNNY}; */

  .content__slide {
    grid-area: main;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    grid-template-areas: 'inner';
    align-items: center;
    opacity: 0;
    pointer-events: none;

    /* &.content__slide--bunny {
      .content__text-inner {
        color: ${cssVars.CLR_BUNNY};
      }
      .content__text--full {
        .content__text-inner {
          color: ${cssVars.COLOR_SLIDE_TEXT};
        }
      }
      .content__text-inner--stroke {
        -webkit-text-stroke: 2px ${cssVars.CLR_BUNNY};
        text-stroke: 2px ${cssVars.CLR_BUNNY};
      }
    } */
  }

  .content__slide--current {
    opacity: 1;
  }

  .content__img,
  .content__text-wrap {
    grid-area: inner;
    width: 100%;
  }

  .content__img {
    height: calc(100vh - 25rem);
    width: 90%;
    max-width: calc(1000px - 11rem);
    max-height: 600px;
    justify-self: center;
    overflow: hidden;
    z-index: 1;
    position: relative;

    &.full-viewport {
      /* height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw; */
    }
  }

  .content__img--full::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }

  .content__img-inner {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
  }

  .content__text-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content__text {
    overflow: hidden;
    flex: 1;
    opacity: 0;
    pointer-events: none;

    z-index: 1;
  }

  .content__text:nth-child(6) {
    opacity: 1;
  }

  .content__text--full {
    flex: none;

    .content__text-inner {
      font-family: ${cssVars.FONT_FAMILY_DISPLAY_ALT};
      font-weight: ${cssVars.FONT_FAMILY_WEIGHT_ALT};
    }
  }

  .content__text-inner {
    display: block;
    color: ${cssVars.COLOR_SLIDE_TEXT};
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: ${cssVars.FONT_FAMILY_WEIGHT};
    line-height: ${cssVars.FONT_TRAIL_LHEIGHT};
    font-family: ${cssVars.FONT_FAMILY_DISPLAY};
  }

  .content__text-inner--bottom {
    transform: translate3d(0, -40%, 0);
  }

  .content__text-inner--stroke {
    -webkit-text-stroke: 2px ${cssVars.COLOR_SLIDE_TEXT};
    text-stroke: 2px ${cssVars.COLOR_SLIDE_TEXT};
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    color: transparent;
  }

  .content__nav {    
    grid-area: main;
    width: 100%;
    max-width: 1200px;

    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.25rem;
    /* position: relative;
    z-index: 1; */

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .content__nav-button + .content__nav-button {
      margin-left: 1rem;
    }
  }

  .content__nav-button {
    border: 0;
    cursor: pointer;
    background: none;
    margin: 0.25rem 0;
    padding: 0;
    text-transform: lowercase;
    color: ${cssVars.COLOR_NAV};
    font-weight: 900;
    font-family: ${cssVars.FONT_FAMILY_DISPLAY};
    line-height: 1;

    img.left-arrow
    img.right-arrow {
      cursor: pointer;
    }
    img.left-arrow {
      max-width: 150px;
    }
    img.right-arrow {
      max-width: 125px;
      margin-right: 25px;
    }
  }

  .content__nav-button:focus {
    outline: none;
  }

  /* .content__nav-button--next {
    transform: translateX(1rem);
  } */

  @media screen and (min-width: 53em) {
    height: 100vh;

    .content__img {
      width: calc(90% - 11rem);
      height: 60vh;

      /* ! Hack - returning to previous state */
      &.full-viewport {
        height: calc(100vh + 20px);
        width: calc(100vw + 20px);
        max-height: calc(100vh + 20px);
        max-width: calc(100vw + 20px);
      }
    }
    .content__img--full {
      height: calc(100vh + 20px);
      width: calc(100vw + 20px);
      max-width: none;
      max-height: none;
    }
    .content__text-inner {
      font-size: ${cssVars.FONT_TRAIL_SIZE};
    }
    .content__nav {
      align-self: center;
      align-items: center;
      justify-content: space-between;
      /* margin-top: 30vh; */
      font-size: 1.75rem;

      .content__nav-button + .content__nav-button {
        margin-left: 0rem;
      }
    }
  }
`;

export default CoDrops;
