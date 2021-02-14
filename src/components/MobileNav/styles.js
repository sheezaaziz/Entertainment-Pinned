import styled from 'styled-components';

import { device } from '../../config/device';

export const MobileNavContainer = styled.div`
  @media ${device.mobileS} {
    padding: 10px;
    padding-top: 25px;
    position: sticky;
    font-size: 1.25em;
    top: 0;
    background-color: #2c2a4a;
    z-index: 1;
    display: block;
  }

  @media ${device.laptop} {
    display: none;
  }

`;

export const OpenMenu = styled.div`
  @media ${device.mobileS} {
    cursor: pointer;
    margin-left: 45px;
    display: inline-block;
  }
`;

export const MobileMenu = styled.div`
  @media ${device.mobileS} {
    cursor: pointer;
    margin-left: 45px;
    display: none;
  }

`;

export const CloseMenu = styled.div`

`;

export const OpenNominations = styled.div`
  @media ${device.mobileS} {
    margin-right: 45px;
    float: right;
    cursor: pointer;
  }
`;
