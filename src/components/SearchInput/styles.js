import styled from 'styled-components';

import colours from '../../config/colours';
import { device } from '../../config/device';

export const SearchInputField = styled.input`
  @media ${device.mobileS} {
    margin-left: 30px;
    padding: 10px;
    width: 83%;
    border: none;
    font-size: 1em;
    background-color: ${colours.backgroundLight};
    color: ${colours.primaryText};

    &:focus {
      outline: none;
      box-shadow: 0 0 15px ${colours.backgroundLight};
    }
  }

  @media ${device.laptop} {
    margin-left: 40px;
    width: 85%;
  }
`;
