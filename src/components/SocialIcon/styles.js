import styled from 'styled-components';

import colours from '../../config/colours';

export const SocialIconBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 1.2em;
  background-color: ${colours.backgroundDark};
  opacity: 0.8;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px ${colours.backgroundLight};
  }

  color: ${({Platform}) =>
  Platform === 'facebook' && `${colours.facebook}` ||
  Platform === 'twitter' && `${colours.twitter}` ||
  Platform === 'reddit' && `${colours.reddit}` ||
  `${colours.primaryText}`
  };
`;
