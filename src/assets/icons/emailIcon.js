import React from 'react';
import { Svg, Path } from './svg';

// https://www.flaticon.com/free-icon/arroba_684816#term=email&page=1&position=39
export default props => (
  <Svg
    width="24"
    height="24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Email"
    role="img"
    viewBox="0 0 512 512">
    <Path d="M255,0C114.06,0,0,114.05,0,255c0,139.895,113.025,257,255,257c140.644,0,257-115.914,257-257C512,112.87,394.743,0,255,0    z M255,482.2C130.935,482.2,29.8,380.168,29.8,255C29.8,130.935,130.935,29.8,255,29.8c125.168,0,227.2,101.135,227.2,225.2    C482.2,380.168,380.168,482.2,255,482.2z" />
    <Path d="M255,90c-90.981,0-165,74.019-165,165c0,91.323,73.867,167,165,167c36.874,0,74.175-12.393,102.339-34.001    c6.573-5.043,7.813-14.459,2.77-21.032c-5.043-6.573-14.46-7.813-21.032-2.77C316.048,381.866,285.403,392.2,255,392.2    c-74.439,0-135-61.658-135-137.2c0-74.439,60.561-135.2,135-135.2c75.542,0,137,60.761,137,135.2v15c0,16.542-13.458,30-30,30    s-30-13.458-30-30c0-7.43,0-67.164,0-75c0-8.284-6.716-15-15-15s-15,6.716-15,15v0.951C288.454,185.622,272.068,180,255,180    c-41.355,0-75,33.645-75,75s33.645,75,75,75c22.423,0,43.059-9.622,57.735-25.812C323.583,319.772,341.615,330,362,330    c33.084,0,60-26.916,60-60v-15C422,163.746,346.21,90,255,90z M255,300.2c-24.813,0-45-20.387-45-45.2s20.187-45.2,45-45.2    c25.477,0,47,20.807,47,45.2S280.477,300.2,255,300.2z" />
  </Svg>
);
