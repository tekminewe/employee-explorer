import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: #fff8e1;
    min-height: 100vh;
    font-family: 'Quicksand', sans-serif;
    color: #333;
    font-size: 1.5rem;
  }

  ::-webkit-input-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  :-moz-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  ::-moz-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  :-ms-input-placeholder {
    font-family: 'Quicksand', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`
