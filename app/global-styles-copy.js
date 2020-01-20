import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden] {
    display: none;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    margin: 0;
    
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    /** for custom cursor */
    ${'' /* cursor: none; */}
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

  a:focus {
    outline: thin dotted;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  b,
  strong {
    font-weight: bold;
  }
  dfn {
    font-style: italic;
  }
  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, serif;
    font-size: 1em;
  }
  pre {
    white-space: pre-wrap;
  }
  q {
    quotes: '\201C''\201D''\2018''\2019';
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  figure {
    margin: 0;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  button,
  input {
    line-height: normal;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type='search'] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  :root {
    font-size: 14px;
  }

   /* Page Loader */
  .js .loading::before {
    content: '';
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg);
  }

  .js .loading::after {
    content: '';
    position: fixed;
    z-index: 100000;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    pointer-events: none;
    border-radius: 50%;
    opacity: 0.4;
    background: var(--color-link);
    animation: loaderAnim 0.7s linear infinite alternate forwards;
  }

  @keyframes loaderAnim {
    to {
      opacity: 1;
      transform: scale3d(0.5, 0.5, 1);
    }
  }

  a {
    text-decoration: none;
    color: var(--color-link);
    outline: none;
  }

  a:hover,
  a:focus {
    color: var(--color-link-hover);
    outline: none;
  }

  @media screen and (min-width: 53em) {
    :root {
      font-size: 16px;
    }
    .frame {
      position: fixed;
      text-align: left;
      z-index: 10000;
      top: 0;
      left: 0;
      display: grid;
      align-content: space-between;
      width: 100%;
      max-width: none;
      height: 100vh;
      padding: 3rem;
      pointer-events: none;
      grid-template-columns: 50% 50%;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'title tagline'
        '... ...'
        'links demos';
    }
    .frame__title-wrap {
      grid-area: title;
      display: flex;
    }
    .frame__title {
      margin: 0;
    }
    .frame__tagline {
      grid-area: tagline;
      justify-self: end;
      margin: 0;
      text-align: right;
    }
    .frame__demos {
      margin: 0;
      grid-area: demos;
      justify-self: end;
    }
    .frame__links {
      grid-area: links;
      padding: 0;
      justify-self: start;
    }
    .frame a {
      pointer-events: auto;
    }
    .content {
      height: 100vh;
    }
    .content__img {
      width: calc(90% - 11rem);
      height: 60vh;
    }
    .content__img--full {
      height: calc(100vh + 20px);
      width: calc(100vw + 20px);
      max-width: none;
      max-height: none;
    }
    .content__text-inner {
      font-size: var(--font-trail-size);
    }
    .content__nav {
      align-self: center;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 30vh;
      font-size: 1.75rem;
    }
    .demo-5 .content__text-inner--stroke {
      -webkit-text-stroke: 3px var(--color-slide-text);
      text-stroke: 3px var(--color-slide-text);
    }
  }

  ${'' /* #cursor {
    position:absolute;
    width:40px;
    height:40px;
    background:#000;
    border-radius:50%;
    top:-40px;
    left:-40px;
    z-index:-2;
  } */}
`;

export default GlobalStyle;
