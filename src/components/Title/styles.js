import styled from 'styled-components';

import { device } from '../../config/device';

export const H1Styled = styled.h1`
  @media ${device.mobileS} {
    margin-top: 10px;
    margin-bottom: 8px;
    padding: 0;
    margin-left: 30px;
    font-weight: 800;
  }

  @media ${device.laptop} {
    margin-left: 40px;
  }
`;
