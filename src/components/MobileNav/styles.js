import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from '../../config/device';
import colours from '../../config/colours';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: ${colours.primaryText};
  margin-bottom: 15px;
`;

export const StyledPrimaryLink = styled(NavLink)`
  margin-right: 35px;
  float: right;
  cursor: pointer;
  color: ${colours.primaryText};

  display: ${({MobileNavOpen}) =>
  MobileNavOpen === false && 'inline-block' ||
  'none'
  };
`;

export const MobileNavContainer = styled.div`
  @media ${device.mobileS} {
    padding: 10px;
    padding-top: 25px;
    position: sticky;
    font-size: 1.25em;
    top: 0;
    background-color: ${colours.body};
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
    margin-left: 35px;
    display: inline-block;

    display: ${({MobileNavOpen}) =>
    MobileNavOpen === false && 'inline-block' ||
    'none'
    };
  }
`;

export const MobileMenu = styled.div`
  @media ${device.mobileS} {
    cursor: pointer;
    margin-left: 35px;
    display: none;

    display: ${({MobileNavOpen}) =>
    MobileNavOpen === true && 'inline-block' ||
    'none'
    };
  }
`;

export const CloseMenu = styled.div`

`;
