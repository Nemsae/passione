import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: serif;
  }

  body.fontLoaded {
    ${'' /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */}
    font-family: 'Libre Caslon Text', serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .--lock-scroll {
    overflow: hidden !important;
  }
`;

export default GlobalStyle;
