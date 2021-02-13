import styled from 'styled-components';

import colours from '../../config/colours';
import {device} from '../../config/device';

export const LeftMenuContainer = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
    background-color: ${colours.backgroundDark};
    width: 6%;
    text-align: center;
    flex: 1;
  }
`;

export const Container = styled.div`
  margin-top: 50px;
`;
