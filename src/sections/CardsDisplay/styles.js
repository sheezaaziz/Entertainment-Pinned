import styled from 'styled-components';

import { device } from '../../config/device';

export const CardsDisplayContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${device.laptop} {
    padding: 10px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    display: block;
    margin: auto;
  }
`;
