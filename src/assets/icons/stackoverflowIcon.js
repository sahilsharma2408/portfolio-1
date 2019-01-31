import React from 'react';
import styled from 'styled-components/macro';
import { Svg, Path } from './svg';

const LocalSvg = styled(Svg)`
  transform: scale(0.95);

  @media screen and (min-width: 768px) {
    &:hover {
      transform: scale(0.95) translateY(-3px);
    }
  }
`;

// https://iconmonstr.com/stackoverflow-1-svg/
export default props => (
  <LocalSvg
    width="24"
    height="24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Stackoverflow"
    role="img"
    viewBox="0 0 34.641 34.641">
    <Path d="M23.994,20.416c0.781,0,1.551,0,2.319,0c0,4.742,0,9.482,0,14.225c-7.536,0-15.057,0-22.585,0c0-4.744,0-9.479,0-14.225   c0.769,0,1.538,0,2.318,0c0,3.971,0,7.938,0,11.92c5.982,0,11.954,0,17.946,0C23.994,28.359,23.994,24.393,23.994,20.416z    M17.389,4.498c2.572,3.772,5.138,7.533,7.707,11.3c0.812-0.555,1.611-1.1,2.414-1.647c-2.576-3.776-5.14-7.534-7.707-11.299   C18.995,3.402,18.199,3.945,17.389,4.498z M24.622,16.196c-3.936-2.321-7.854-4.632-11.78-6.948   c-0.499,0.845-0.989,1.675-1.486,2.517c3.926,2.315,7.847,4.627,11.782,6.948C23.637,17.866,24.129,17.034,24.622,16.196z    M28.571,0c-0.965,0.168-1.91,0.333-2.879,0.5c0.78,4.499,1.562,8.981,2.34,13.474c0.972-0.168,1.922-0.334,2.88-0.5   C30.131,8.97,29.352,4.487,28.571,0z M22.897,19.539c-4.41-1.188-8.803-2.367-13.208-3.552c-0.254,0.942-0.505,1.875-0.76,2.822   c4.409,1.186,8.806,2.366,13.209,3.551C22.395,21.412,22.645,20.479,22.897,19.539z M21.658,27.104c-4.558,0-9.103,0-13.654,0   c0,0.979,0,1.942,0,2.905c4.559,0,9.104,0,13.654,0C21.658,29.031,21.658,28.066,21.658,27.104z M22,23.349   c-4.547-0.418-9.078-0.838-13.619-1.254C8.29,23.072,8.2,24.033,8.11,25.005c4.547,0.418,9.079,0.836,13.62,1.254   C21.821,25.281,21.909,24.32,22,23.349z" />
  </LocalSvg>
);
