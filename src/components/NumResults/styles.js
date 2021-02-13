import styled from 'styled-components';

import colours from '../../config/colours';
import { device } from '../../config/device';

export const DisplayNumResults = styled.div`
  @media ${device.mobileS} {
    color: ${colours.primaryText};
    background-color: ${colours.backgroundDark};
    display: inline-block;
    border-radius: 1.2em;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 10px;
    margin-left: 30px;
  }

  @media ${device.laptop} {
    margin-left: 40px;
  }
`;
