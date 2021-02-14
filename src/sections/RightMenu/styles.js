import styled from 'styled-components';

import colours from '../../config/colours';
import { device } from '../../config/device';

export const RightMenuContainer = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
    background-color: ${colours.secondaryBackground};
    text-align: center;
    flex: 2;
    position: relative;
  }
`;

export const ScrollableContainer = styled.div`
  height: 78%;
  overflow: scroll;
  overflow-x: hidden;
  text-align: center;
`;
