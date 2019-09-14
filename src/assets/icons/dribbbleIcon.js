import React from 'react';
import styled from 'styled-components';
import { Svg, Path } from './svg';

const LocalSvg = styled(Svg)`
  transform: scale(0.95) translateY(1px);

  @media screen and (min-width: 768px) {
    &:hover {
      transform: scale(0.95) translateY(-2px);
    }
  }
`;

// https://www.flaticon.com/free-icon/dribbble_1051361#term=dribbble&page=1&position=26
export default props => (
  <LocalSvg
    width="24"
    height="24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Dribbble"
    role="img"
    viewBox="0 0 512 512">
    <Path d="m257 512c140.929688 0 255-114.050781 255-255 0-140.433594-113.59375-257-255-257-140.816406 0-257 116.105469-257 257 0 141.53125 116.707031 255 257 255zm-131.617188-71.78125c18.589844-70.84375 84.8125-128.484375 169.515626-154.007812 19.863281 58.601562 32.125 120.492187 35.847656 183.363281-23.113282 8.039062-47.925782 12.425781-73.746094 12.425781-49.023438 0-94.46875-15.488281-131.617188-41.78125zm234.605469 16.789062c-4.472656-61.175781-16.417969-120.855468-35.644531-178.207031 52.203125-10.621093 106.628906-8.621093 156.082031 4.753907-8.933593 75.628906-55.511719 139.886718-120.4375 173.453124zm-63.015625-247.648437c50.898438-18.96875 104.863282-50.425781 134.210938-95.882813 30.957031 38.164063 49.84375 86.648438 50.765625 139.476563-53.21875-13.347656-111.582031-14.769531-167.875-2.769531-5.449219-14.230469-10.957031-27.335938-17.101563-40.824219zm112.949219-118.707031c-24.351563 44.046875-78.890625 74.355468-126.019531 91.566406-26.378906-51.890625-58.648438-99.226562-96.375-141.332031 21.90625-7.058594 45.25-10.886719 69.472656-10.886719 58.996094 0 112.75 23.039062 152.921875 60.652344zm-252.09375-37.8125c38.027344 40.96875 70.601563 87.890625 96.945313 138.847656-65.792969 18.910156-142.953126 25.371094-219.402344 16.175781 15.125-68.273437 61.078125-125.085937 122.457031-155.023437zm-126.984375 184.699218c81.921875 9.988282 165.507812 2.925782 237.277344-18.523437 5.859375 12.714844 11.351562 25.644531 16.449218 38.773437-82.433593 24.988282-157.105468 81.285157-184.3125 161.8125-43.265624-40.992187-70.257812-98.730468-70.257812-162.601562 0-6.554688.296875-13.042969.84375-19.460938zm0 0" />
  </LocalSvg>
);
