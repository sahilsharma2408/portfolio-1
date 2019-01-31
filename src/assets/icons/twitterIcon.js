import React from 'react';
import styled from 'styled-components/macro';
import { Svg, Path } from './svg';

const LocalSvg = styled(Svg)`
  transform: scale(1.05) translateY(1px);

  @media screen and (min-width: 768px) {
    &:hover {
      transform: scale(1.05) translateY(-2px);
    }
  }
`;

// https://www.flaticon.com/free-icon/twitter_1400822#term=twitter&page=1&position=56
export default props => (
  <LocalSvg
    width="24"
    height="24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Twitter"
    role="img"
    viewBox="0 -41 512 511">
    <Path d="m512 52.730469-46.203125-6.085938 12.0625-45.011719-54.125 14.503907c-17.300781-10.25-36.945313-15.636719-57.242187-15.636719-62.03125 0-112.5 50.46875-112.5 112.5v14.59375c-77.421876-4.210938-148.691407-40.941406-197.355469-102.234375l-12.582031-15.847656-11.503907 16.644531c-4.554687 6.585938-8.417969 13.6875-11.488281 21.097656-9.542969 23.039063-11.234375 47.929688-4.886719 71.988282 3.730469 14.152343 10.25 27.492187 18.984375 39.148437l-17.832031 4.28125 3.5 14.585937c9.300781 38.726563 37.746094 68.851563 74.265625 80.914063l-17.535156 20.53125 11.40625 9.742187c17.308594 14.78125 38.632812 23.9375 61.066406 26.398438-30.769531 22.585938-68.144531 35.050781-107.039062 35.050781-8.59375 0-17.296876-.621093-25.871094-1.847656l-17.121094-2.449219v25.261719l6.441406 4.476563c50.527344 35.105468 109.847656 53.664062 171.550782 53.664062 80.402343 0 155.988281-31.308594 212.839843-88.160156 56.851563-56.851563 88.160157-132.4375 88.160157-212.839844v-15c0-5.292969-.371094-10.585938-1.105469-15.8125zm-64.699219 43.550781c1.121094 5.460938 1.691407 11.085938 1.691407 16.71875v15c0 149.429688-121.570313 271-271 271-36.570313 0-72.214844-7.238281-105.277344-21.203125 50.507812-7.171875 97.007812-32.472656 130.675781-71.835937l9.019531-10.546876-16.457031-16.449218-8.667969 2.722656c-8.089844 2.539062-16.5 3.824219-25 3.824219-14.65625 0-28.984375-3.902344-41.542968-11.175781l32.789062-38.386719-29.351562-2.308594c-30.863282-2.425781-57.203126-21.550781-69.367188-49.117187l42.449219-10.1875-23.832031-19.144532c-27.859376-22.386718-38.1875-60.710937-25.613282-94.027344 56.945313 61.8125 136.359375 96.835938 221.175782 96.835938h15v-45c0-45.492188 37.011718-82.5 82.5-82.5 16.625 0 32.644531 4.921875 46.332031 14.230469l5.683593 3.863281 16.925782-4.535156-7.46875 27.867187 28.601562 3.765625-10.644531 13.875zm0 0" />
  </LocalSvg>
);
