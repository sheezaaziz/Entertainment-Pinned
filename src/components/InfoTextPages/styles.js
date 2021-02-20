import styled from 'styled-components';

import { device } from '../../config/device';

export const Container = styled.div`
  @media ${device.mobileS} {
    margin-left: 30px;
    width: 90%;
  }

  @media ${device.laptop} {
    margin-left: 45px;
  }
`;
