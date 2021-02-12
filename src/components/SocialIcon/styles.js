import styled from 'styled-components';

export const SocialIconBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 1.2em;
  background-color: #1E1D33;
  opacity: 0.8;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #413F5C;
  }

  color: ${({Platform}) =>
  Platform === 'facebook' && '#4267B2' ||
  Platform === 'twitter' && '#1DA1F2' ||
  Platform === 'link' && '#FF00BF' ||
  '#ff8500'
  };
`;
